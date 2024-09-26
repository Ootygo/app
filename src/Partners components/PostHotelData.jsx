import React, { useState, useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";
import "./PostHotelData.css";
import { ClipLoader } from "react-spinners";

// Configure AWS SDK
AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const docClient = new AWS.DynamoDB.DocumentClient();

const PostHotelData = () => {
  const initialFormData = {
    id: "",
    name: "",
    imgurl: "",
    imgurl2: "",
    imgurl3: "",
    video: "",
    rate: "",
    username: "",
    cell: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
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
      [name]: value,
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
      Bucket: "ootygo-asset-hotel",
      Key: file.name,
      Body: file,
    };
    const data = await s3.upload(params).promise();
    return data.Location;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const imgurl = await uploadFile(formData.imgurl);
      const imgurl2 = await uploadFile(formData.imgurl2);
      const imgurl3 = await uploadFile(formData.imgurl3);
      const video = await uploadFile(formData.video);

      const params = {
        TableName: "Ootygo-hotel",
        Item: {
          ...formData,
          id: Number(formData.id),
          imgurl,
          imgurl2,
          imgurl3,
          video,
          username: user.signInDetails.loginId, // Add the user's email to the item
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
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Upload_hotel_form">
        <input
          type="number"
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
          placeholder="Staying Asset Name"
          required
        />
        <input type="file" name="imgurl" onChange={handleFileChange} required />
        <input
          type="file"
          name="imgurl2"
          onChange={handleFileChange}
          required
        />
        <input
          type="file"
          name="imgurl3"
          onChange={handleFileChange}
          required
        />
        <input type="file" name="video" onChange={handleFileChange} required />
        <input
          type="text"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          placeholder="Starting Rate"
          required
        />
        <input
          type="text"
          name="cell"
          value={formData.cell}
          onChange={handleChange}
          placeholder="Mobile No"
          required
        />

        <div>
          <button type="submit" className="Upload_btn">
            {loading && <ClipLoader />}Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default PostHotelData;
