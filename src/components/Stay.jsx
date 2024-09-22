import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import "./Travel.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
//Amenitys
import { FaTaxi } from "react-icons/fa";
import { SiAmazongames } from "react-icons/si";
import { GiCampfire } from "react-icons/gi";
import { GiBarbecue } from "react-icons/gi";
import { SlCallOut } from "react-icons/sl";

//Sliders
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Initialize AWS SDK
AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        backgroundColor: "grey",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        backgroundColor: "grey",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
};

export default function Stay() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [data, setData] = useState([]);
  const { user } = useAuthenticator((context) => [context.user]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/SignUp");
  };

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

  //Load more

  const [toList, setToList] = useState(6);

  const shuffledData = shuffleHotel([...data]).slice(0, toList);

  // Image Slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 10,
    color: "black",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearched] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const items = data;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        
    );
    setFilteredItems(results);
    setSearched(true);
  };
  const handleFilter1 = () => {
    setSearched(false);
    const resultsFil1 = items.filter(
      (item) => item.rate >= 999 && item.rate <= 2000
    );
    setFilteredItems(resultsFil1);
    setSearched(true);
  };
  const handleFilter2 = () => {
    setSearched(false);
    const resultsFil2 = items.filter(
      (item) => item.rate >= 2000 && item.rate <= 4000
    );
    setFilteredItems(resultsFil2);
    setSearched(true);
  };
  const handleFilter3 = () => {
    setSearched(false);
    const resultsFil3 = items.filter((item) => item.rate >= 4000);
    setFilteredItems(resultsFil3);
    setSearched(true);
  };

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
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
          {search ? (
            <div>
              <h2 className="Travel_Search_Title">Search Results</h2>
              <ul className="Travel_Search_Result">
                {" "}
                {filteredItems > [""] ? (
                  filteredItems.map(
                    (
                      { name, imgurl, imgurl2, imgurl3, video, rate, cell },
                      index
                    ) => (
                      <div key={index} className="Stay_Hotels_items">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div>
                              <img
                                src={imgurl}
                                alt="Slide 1"
                                className="Stay_Slide_img"
                              />
                            </div>
                            <div>
                              <img
                                src={imgurl2}
                                alt="Slide 2"
                                className="Stay_Slide_img"
                              />
                            </div>
                            <div>
                              <img
                                src={imgurl3}
                                alt="Slide 3"
                                className="Stay_Slide_img"
                              />
                            </div>
                            <div>
                              <video
                                width="280=px"
                                height="200px"
                                controls
                                muted
                                autoPlay
                              >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </Slider>
                        </div>
                        <h3 className="Stay_hotel_title">{name}</h3>
                        <div className="Stay_Amenity">
                          <div></div>
                          <div className="Stay_Amenity_items">
                            <FaTaxi />
                            <SiAmazongames />
                            <GiCampfire />
                            <GiBarbecue />
                          </div>
                        </div>
                        <span>
                          <b>Starting @ ₹{rate}</b>
                        </span>
                        <span className="Stay_hotel_call">
                          {" "}
                          <b
                            onClick={
                              user
                                ? () => (window.location.href = `tel:${cell}`)
                                : handleClick
                            }
                          >
                            <SlCallOut />
                          </b>
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
        {data ? (
          <div className="Stay_contant_Hotels">
            {shuffledData.map(
              (
                { name, imgurl, imgurl2, imgurl3, video, rate, cell },
                index
              ) => (
                <div key={index} className="Stay_Hotels_items">
                  <div className="slider-container">
                    <Slider {...settings}>
                      <div>
                        <img
                          src={imgurl}
                          alt="Slide 1"
                          className="Stay_Slide_img"
                        />
                      </div>
                      <div>
                        <img
                          src={imgurl2}
                          alt="Slide 2"
                          className="Stay_Slide_img"
                        />
                      </div>
                      <div>
                        <img
                          src={imgurl3}
                          alt="Slide 3"
                          className="Stay_Slide_img"
                        />
                      </div>
                      <div>
                        <video
                          width="280=px"
                          height="200px"
                          controls
                          muted
                          autoPlay
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </Slider>
                  </div>
                  <h3 className="Stay_hotel_title">{name}</h3>
                  <div className="Stay_Amenity">
                    <div></div>
                    <div className="Stay_Amenity_items">
                      <FaTaxi />
                      <SiAmazongames />
                      <GiCampfire />
                      <GiBarbecue />
                    </div>
                  </div>
                  <span>
                    <b>Starting @ ₹{rate}</b>
                  </span>
                  <span className="Stay_hotel_call">
                    {" "}
                    <b
                      onClick={
                        user
                          ? () => (window.location.href = `tel:${cell}`)
                          : handleClick
                      }
                    >
                      <SlCallOut />
                    </b>
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
        <div className="LoadMorebtn">
          <button onClick={() => setToList((prev) => prev - 6)}>
            Show Less
          </button>
          <button onClick={() => setToList((prev) => prev + 6)}>
            Load More
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
