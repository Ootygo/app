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
import { MdOutlineChair } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
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

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearched] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const items = data; //items is assigned from data

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = items.filter(
      (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) //filtering based on item.name
    );
    setFilteredItems(results);
    setSearched(true);
  };
  return (
    <>
      <Navbar />
      <div className="Travel_contant">
        <div className="Travel_contant_item">
          <h1 className="Travel_contant_title">Book Vehicles For Your Trip</h1>

          <div className="Travel_contant_search">
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button onClick={handleSearch} className="Travel_Search_Btn"><FaSearch /></button>
            </div>
          </div>
        </div>
        <div className="Travel_vehicles">
          {/* Search Results */}
          {search ? (
            <div>
              <h2 className="Travel_Search_Title">Search Results</h2>
              <ul className="Travel_Search_Result">
                {" "}
                {filteredItems.map(({ name, imgurl, number, sitting }, index) => (
                  <li key={index}>
                    <img
                      src={imgurl}
                      alt="test-img"
                      className="Stay_hotel_img"
                    />
                    <h3 className="Stay_hotel_title">{name}</h3>
                    <span className="Travel_sitting_capacity"><MdOutlineChair />{sitting}</span>
                    <span>
                      {user ? (
                        <button
                          onClick={() =>
                            (window.location.href = `tel:${number}`)
                          }
                          className="Travel_call_Btn"
                        >
                          Call: {number}
                        </button>
                      ) : (
                        <span className="Travel_call_btn">
                          <MdAddIcCall onClick={handleClick} />
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <h2 className="Travel_vehicles_title">
            Our Authorized Travel Partners
          </h2>
          <div className="Travel_contant">
            {data ? (
              <div className="Travel_contant_Vehicle">
                {shuffledData.map(({ name, imgurl, number }, index) => (
                  <div key={index} className="Travel_contant_Vehicles">
                    <img
                      src={imgurl}
                      alt="test-img"
                      className="Stay_hotel_img"
                    />
                    <h3 className="Stay_hotel_title">{name}</h3>
                    <span>
                      {user ? (
                        <button
                          onClick={() =>
                            (window.location.href = `tel:${number}`)
                          }
                          className="Travel_call_Btn"
                        >
                          Call:{number}
                        </button>
                      ) : (
                        <span className="Travel_call_btn">
                          <MdAddIcCall onClick={handleClick} />
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="loading-container">
                <div className="loading-spinner">
                  <div className="loading_spinner_negative"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
