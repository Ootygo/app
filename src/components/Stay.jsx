import React, { useEffect, useState } from "react";
import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default function Stay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Configure AWS SDK

  const fetchData = async () => {
    const params = {
      TableName: "Ootygo-hotel",
      
    };

    try {
      const data = await dynamoDB.scan(params).promise();
      return data.Items;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await fetchData();
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        <div className="Stay_contant_Hotels">
          {items.slice(0, 10).map(({ name, imgurl, rate }, index) => (
            <div key={index}>
              <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
              <h3 className="Stay_hotel_title">{name}</h3>
              <span>₹{rate}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
