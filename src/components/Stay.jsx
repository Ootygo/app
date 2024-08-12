import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

// Initialize AWS SDK
AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  
});
export default function Stay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ootygo-hotel",
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.error("Error fetching data from DynamoDB:", err);
      } else {
        setData(result.Items);
      }
    });
  }, []);

  const shuffleHotel = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledData = shuffleHotel([...data]);

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        <div className="Stay_contant_Hotels">
          {shuffledData.map(({ name, imgurl, rate }, index) => (
            <div key={index}>
              <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
              <h3 className="Stay_hotel_title">{name}</h3>
              <span>₹{rate}</span>
            </div>
          ))}
        </div>
        <div className="Stay_data"></div>
      </div>

      <Footer />
    </>
  );
}
