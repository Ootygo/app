// PostHotelData.js
import React, { useEffect, useState } from "react";
import { postHotelData } from "./dynamoDBService";
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

const PostHotelData = () => {


  const [hotelData, setHotelData] = useState({
    id: 0,
    name: "",
    imgurl: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!hotelData.name || !hotelData.imgurl || !hotelData.rate) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      await postHotelData(hotelData);
      // Reset the form fields
      setHotelData({
        id: "",
        name: "",
        imgurl: "",
        rate: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // Hotel id +++
  const getLastUpdatedItemId = async () => {
    const params = {
      TableName: "Ootygo-hotel",
      ScanIndexForward: false, // Get the latest item
      Limit: 1,
    };

    try {
      const data = await dynamoDB.scan(params).promise();
      return data.Items.length > 0 ? data.Items[data.Items.length - 1].id : null;
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
      <h2>Add your hotel data</h2>
      <div className="Post_Hotel_Data">
        <form onSubmit={handleSubmit} className="Post_Hotel_Data_Content">
          <label>
            Hotel Id
            <br />
            <input
              type="number"
              name="id"
              value={newId}
              onChange={handleChange}
              required
              
            />
          </label>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={hotelData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Hotel Image URL
            <br />
            <input
              type="text"
              name="imgurl"
              value={hotelData.imgurl}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Rate
            <br />
            <input
              type="text"
              name="rate"
              value={hotelData.rate}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="Hotel_Post_Btn">Post My Hotel</button>
        </form>
      </div>
    </>
  );
};

export default PostHotelData;
