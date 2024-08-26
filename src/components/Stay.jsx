import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import "./Travel.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router";
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

  const shuffledData = shuffleHotel([...data]);

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

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        {data ? (
          <div className="Stay_contant_Hotels">
            {shuffledData.map(
              (
                { name, imgurl, imgurl2, imgurl3, video, rate, cell },
                index
              ) => (
                <div key={index} className="Stay_Hotels_items">
                  {/* <img src={imgurl} alt="test-img" className="Stay_hotel_img" /> */}
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
                    <b>₹{rate} per day</b>
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
      </div>

      <Footer />
    </>
  );
}
