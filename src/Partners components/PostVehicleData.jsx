// PostHotelData.js
import React, { useEffect, useState } from "react";
import { postVehicleData } from "./dynamoDBservicevh";
import "./PostHotelData.css";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const PostVehicleData = () => {
  const [vehicleData, setVehicleData] = useState({
    id: "",
    name: "",
    imgurl: "",
    number: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!vehicleData.name || !vehicleData.imgurl || !vehicleData.number) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      await postVehicleData(vehicleData);
      // Reset the form fields
      setVehicleData({
        id: "",
        name: "",
        imgurl: "",
        number: 0,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const getLastUpdatedItemId = async () => {
    const params = {
      TableName: "Ootygo-travel",
      ScanIndexForward: false, // Get the latest item
      Limit: 1,
    };

    try {
      const data = await dynamoDB.scan(params).promise();
      return data.Items.length > 0
        ? data.Items[data.Items.length - 1].id
        : null;
    } catch (error) {
      console.error("Error querying DynamoDB:", error);
      return null;
    }
  };

  const [lastUpdatedId, setLastUpdatedId] = useState(null);

  useEffect(() => {
    const fetchLastUpdatedId = async () => {
      const id = await getLastUpdatedItemId();
      setLastUpdatedId(id);
    };

    fetchLastUpdatedId();
  }, []);

  const newId = lastUpdatedId ? Number(lastUpdatedId) + 1 : null;

  return (
    <>
      <h2>Add your vehicle data</h2>
      <div className="Post_Hotel_Data">
        <form onSubmit={handleSubmit} className="Post_Hotel_Data_Content">
          <label>
            Vehicle id
            <br />
            <input
              type="text"
              name="id"
              value={String(newId)}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Company Name
            <br />
            <input
              type="text"
              name="name"
              value={vehicleData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Vehicle Image URL
            <br />
            <input
              type="text"
              name="imgurl"
              value={vehicleData.imgurl}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mobile No
            <br />
            <input
              type="number"
              name="number"
              value={vehicleData.number}
              onChange={handleChange}
              required
              placeholder="1234567890"
            />
          </label>
          <button type="submit" className="Hotel_Post_Btn">
            Post My Vehicle
          </button>
        </form>
      </div>
    </>
  );
};

export default PostVehicleData;
