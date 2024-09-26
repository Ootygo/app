import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import "./PostHotelData.css";
import { ClipLoader } from "react-spinners";
import { useAuthenticator } from "@aws-amplify/ui-react";
// Configure AWS SDK
AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const docClient = new AWS.DynamoDB.DocumentClient();


const PostVehicleData = () => {
  const initialFormData = {
    id: "",
    name: "",
    car: "",
    imgurl: "",
    number: "",
    pkg: "",
    sitting: "",
    username: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const { user } = useAuthenticator((context) => [context.user]);
  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        username: user.signInDetails.loginId,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "number" ? Number(value) : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const uploadFile = async (file) => {
    const params = {
      Bucket: "ootygo-travel-partner",
      Key: file.name,
      Body: file,
    };
    const data = await s3.upload(params).promise();
    return data.Location;
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const imgurl = await uploadFile(formData.imgurl);

      const params = {
        TableName: "Ootygo-travel",
        Item: {
          ...formData,
          imgurl,
        },
      };

      await docClient.put(params).promise();
      setLoading(false);
      alert("Data saved successfully!");
      setFormData(initialFormData);
      window.location.reload();
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Upload_hotel_form">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Travels Name"
        required
      />
      <input
        type="text"
        name="car"
        value={formData.car}
        onChange={handleChange}
        placeholder="Vehicle Name"
        required
      />
      <input type="file" name="imgurl" onChange={handleFileChange} required />
      <input
        type="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        placeholder="Mobile Number"
        required
      />
      <input
        type="text"
        name="pkg"
        value={formData.pkg}
        onChange={handleChange}
        placeholder="Package"
        required
      />
      <input
        type="text"
        name="sitting"
        value={formData.sitting}
        onChange={handleChange}
        placeholder="Example 5+1"
        required
      />
      <div>
        <button type="submit" className="Upload_btn">
          {loading && <ClipLoader />}Submit
        </button>
      </div>
    </form>
  );
};

export default PostVehicleData;
