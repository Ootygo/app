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
import { BiChair } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";
//import { IoMdInformationCircle } from "react-icons/io";
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
  const items = data;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handleSearch = () => {
    if (searchTerm <= "") {
      return null;
    } else {
      const results = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.number.toString().includes(searchTerm.toString()) ||
          item.sitting.toString().includes(searchTerm.toString()) ||
          item.pkg.toString().includes(searchTerm.toString()) ||
          item.car.toString().toLowerCase().includes(searchTerm.toString())
      );
      setFilteredItems(results);
      setSearched(true);
    }
  };
  
  const handleFilter1 = () => {
    setSearched(false);
    const resultsFil1 = items.filter(
      (item) => item.pkg >= 999 && item.pkg <= 2000
    );
    setFilteredItems(resultsFil1);
    setSearched(true);
  };
  const handleFilter2 = () => {
    setSearched(false);
    const resultsFil2 = items.filter(
      (item) => item.pkg >= 2000 && item.pkg <= 4000
    );
    setFilteredItems(resultsFil2);
    setSearched(true);
  };
  const handleFilter3 = () => {
    setSearched(false);
    const resultsFil3 = items.filter((item) => item.pkg >= 4000);
    setFilteredItems(resultsFil3);
    setSearched(true);
  };

  return (
    <>
      <Navbar />
      <div className="Travel_contant">
        <div className="Travel_contant_item">
          <h1 className="Travel_contant_title">Book Vehicles For Your Trip</h1>

          <div className="Travel_contant_search">
            <div className="Travel_search_bar_item">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className="Travel_search_bar"
                
              />
              <button onClick={handleSearch} className="Travel_Search_Btn">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="Travel_Vehicle_Filter">
            <button onClick={handleFilter1} className="Travel_Vehicle_Filters">
              1000 to 2000
            </button>
            <button onClick={handleFilter2} className="Travel_Vehicle_Filters">
              2000 to 4000
            </button>
            <button onClick={handleFilter3} className="Travel_Vehicle_Filters">
              4000 Above
            </button>
          </div>
        </div>
        <div className="Travel_vehicles">
          {/* Search Results */}
          {search ? (
            <div>
              <h2 className="Travel_Search_Title">Search Results</h2>
              <ul className="Travel_Search_Result">
                {" "}
                {filteredItems > [""] ? (
                  filteredItems.map(
                    ({ name, car, imgurl, number, sitting, pkg }, index) => (
                      <div key={index} className="Travel_contant_Vehicles">
                        <img
                          src={imgurl}
                          alt="test-img"
                          className="Stay_hotel_img"
                        />
                        <h3 className="Travel_Vehicle_title">{name}</h3>
                        <h4 className="Travel_Car">{car}</h4>
                        <div className="Travel_Rete">
                          Pkg starts @ <b>{pkg}</b>
                        </div>
                        <span className="Travel_sitting_capacity">
                          <BiChair />
                          {sitting}
                        </span>

                        <span>
                          {user ? (
                            <span
                              onClick={() =>
                                (window.location.href = `tel:${number}`)
                              }
                              className="Travel_call_btn"
                            >
                              <SlCallOut />
                            </span>
                          ) : (
                            <span
                              className="Travel_call_btn"
                              onClick={handleClick}
                            >
                              <MdAddIcCall />
                            </span>
                          )}
                        </span>
                      </div>
                    )
                  )
                ) : (
                  <div>
                    <span className="Vehicle_Search_0">
                      <img
                        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?t=st=1724763892~exp=1724767492~hmac=b7873684b161a6acbcd24130da313497c8027905132299eb24138f85a86dcc58&w=740"
                        alt="Nothing Found"
                        height="300px"
                        width="400px"
                      />
                    </span>
                  </div>
                )}
              </ul>
              <hr />
            </div>
          ) : null}

          <div className="Travel_contants">
            {data ? (
              <div className="Travel_contant_Vehicle">
                {shuffledData.map(
                  ({ name, car, imgurl, number, sitting, pkg }, index) => (
                    <div key={index} className="Travel_contant_Vehicles">
                      <img
                        src={imgurl}
                        alt="test-img"
                        className="Stay_hotel_img"
                      />
                      <h3 className="Travel_Vehicle_title">{name}</h3>
                      <h4 className="Travel_Car">{car}</h4>
                      <div className="Travel_Rete">
                        Pkg starts @ <b>{pkg}</b>
                      </div>
                      <span className="Travel_sitting_capacity">
                        <BiChair />
                        {sitting}
                      </span>

                      <span>
                        {user ? (
                          <span
                            onClick={() =>
                              (window.location.href = `tel:${number}`)
                            }
                            className="Travel_call_btn"
                          >
                            <SlCallOut />
                          </span>
                        ) : (
                          <span
                            className="Travel_call_btn"
                            onClick={handleClick}
                          >
                            <MdAddIcCall />
                          </span>
                        )}
                      </span>
                    </div>
                  )
                )}
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
