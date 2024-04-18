import React from "react";
import "./Travel.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";

export default function Travel() {
  return (
    <>
      <Navbar />
      <div className="Travel_contant">
        <div className="Travel_contant_item">
          <h1 className="Travel_contant_title">Book Vehicles For Your Trip</h1>
          <form action="submit">
            <div className="Travel_contant_search">
              <div>
                <h4 className="Travel_contant_search_title">Starting</h4>
                <input type="text" className="Travel_contant_location" />
              </div>
              <div>
                <h4 className="Travel_contant_search_title">Destination</h4>
                <input type="text" className="Travel_contant_location" />
              </div>
              <div>
                <h4 className="Travel_contant_search_title">Package</h4>
                <input type="text" className="Travel_contant_location" />
              </div>
              <div>
                <h4 className="Travel_contant_search_title">Date</h4>
                <input type="date" className="Travel_contant_date" />
              </div>
            </div>
            <div className="Travel_contant_search_btns">
            <button className="Travel_contant_search_btn" type="submit">Search</button>
            </div> 
          </form>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
