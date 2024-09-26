import React, { useEffect, useState } from "react";
import Footer from "../../page/Footer";
import Navbar from "../../page/Navbar";
import Subscription from "./Subscription";
import "./Partners.css";
import Mybookings from "../Login User/Mybookings";
import PostHotelData from "../../Partners components/PostHotelData";
import PostVehicleData from "../../Partners components/PostVehicleData";
import { useAuthenticator } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";

export default function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [PaidUser, setPaidUser] = useState(false);
  // Initialize AWS SDK
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Subscription-User-list",
    };

    dynamodb.scan(params, (err, result) => {
      if (err) {
        console.error("Error fetching data from DynamoDB:", err);
      } else {
        setData(result.Items);
      }
    });
  }, []);

  // user paid check

  const { user } = useAuthenticator((context) => [context.user]);
  useEffect(() => {
    let found = false;
    data.forEach((item) => {
      if (user.signInDetails.loginId === item.name) {
        found = true;
      }
    });
    if (found) {
      setPaidUser(true);
    }
  }, [data, user]);
// Open Chat

  return (
    <>
      <Navbar />
      <div className="Partners_section">
        <h2 className="Partner_titel">Welcome to OotyGO Partner Section</h2>
        <div className="Partner_Signup">
          {PaidUser ? (
            <>
              <Mybookings /> <br />
              <div className="Post_assets">
                <PostHotelData />
                <PostVehicleData />
              </div>
            </>
          ) : (
            <div>
              <Subscription />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}