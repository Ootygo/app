import React from "react";
import "./Contant.css";
import { useState, useEffect } from "react";

import AWS from "aws-sdk";
import "../components/Stay.css";
import HoverVideoPlayer from "react-hover-video-player";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});
function Contant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ooty_highlights",
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
      <div className="Cantant">
        <div className="Contant_1">
          <div className="kavi">
            <div className="Stay_contant_Hotels">
              {shuffledData.map(({ name, imgurl, video }, index) => (
                <div key={index}>
                  <div className="Contant_Higlights">
                    <HoverVideoPlayer
                      videoSrc={video}
                      crossOrigin="anonymous"
                      pausedOverlay={
                        <img
                          src={imgurl}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      }
                      loadingOverlay={
                        <div className="loading-overlay">
                          <div className="loading-spinner" />
                        </div>
                      }
                    />
                  </div>

                  <h3 className="Stay_hotel_title">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contant;
