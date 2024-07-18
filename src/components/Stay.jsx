import React, { useEffect } from "react";
import "./Stay.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";


export default function Stay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="Stay_contant">
        <h1 className="Stay_contant_title">Top 10 Hotels</h1>
        <div className="Stay_contant_Hotels">
          {/* {items.slice(0, 10).map(({ name, imgurl, rate }, index) => (
            <div key={index}>
              <img src={imgurl} alt="test-img" className="Stay_hotel_img" />
              <h3 className="Stay_hotel_title">{name}</h3>
              <span>₹{rate}</span>
            </div>
          ))} */}
          <div>
            <h1>Hotels are coming soon..</h1>
            
          </div>
        </div>
        <div className="Stay_data"></div>
      </div>

      <Footer />
    </>
  );
}
