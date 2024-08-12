import React from "react";
import "./Travel.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MdAddIcCall } from "react-icons/md";
import AWS from "aws-sdk";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "../components/Stay.css";
export default function Travel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SignUp");
  };
  const { user } = useAuthenticator((context) => [context.user]);

  const [data, setData] = useState([]);
  // Initialize AWS SDK
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: "Ootygo-travel",
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
      <div className="Travel_contant">
        <div className="Travel_contant_item">
          <h1 className="Travel_contant_title">Book Vehicles For Your Trip</h1>
          <form action="submit">
            <div className="Travel_contant_search">
              <div>
                <h4 className="Travel_contant_search_title">Package</h4>

                <select
                  name="Package"
                  id="pack"
                  className="Travel_contant_location"
                >
                  <option value="">Select</option>
                  <option value="pac">1 Day Trip</option>
                  <option value="pac">2 Day Trip</option>
                  <option value="pac">3 Day Trip</option>
                  <option value="pac">Couple special</option>
                  <option value="pac">Family Frindly</option>
                  <option value="pac">Gang Trip</option>
                  <option value="pac">School & College</option>
                </select>
              </div>
              <div>
                <h4 className="Travel_contant_search_title">Date</h4>
                <input type="date" className="Travel_contant_date" />
              </div>
            </div>
            <div className="Travel_contant_search_btns">
              <button className="Travel_contant_search_btn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="Travel_vehicles">
          <h2 className="Travel_vehicles_title">
            Our Authorized Travel Partners
          </h2>
          <div className="Stay_contant">
            
            <div className="Stay_contant_Hotels">
              {shuffledData.map(({ name, imgurl, number }, index) => (
                <div key={index}>
                  <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
                  <h3 className="Stay_hotel_title">{name}</h3>
                  <span>
                    {user ? (
                      <span>Ph.{number}</span>
                    ) : (
                      <span className="Travel_call_btn">
                        <MdAddIcCall onClick={handleClick} />
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="Stay_data"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
