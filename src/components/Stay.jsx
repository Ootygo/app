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

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        <div className="Stay_contant_Hotels">
          {data.slice(0, 10).map(({ name, imgurl, rate }, index) => (
            <div key={index}>
              <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
              <h3 className="Stay_hotel_title">{name}</h3>
              <span>₹{rate}</span>
            </div>
          ))}
          {/* <div className="loading_section">
            <div className="loading">
              <div></div>
            </div>
            <h2>Loading</h2>
            {/* <div>
              <h2>Data from DynamoDB:</h2>
              <ul>
                {data.map((item) => (
                  <li key={item.id}>{item.name}</li>
                  // Adjust the property names based on your table schema
                ))}
              </ul>
            </div>
          </div>*/}
        </div>
        <div className="Stay_data"></div>
      </div>

      <Footer />
    </>
  );
}
