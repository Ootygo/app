import React, { useEffect } from "react";
import Footer from "../../page/Footer";
import Navbar from "../../page/Navbar";
import Subscription from "./Subscription";
import "./Partners.css";
import Mybookings from "../Login User/Mybookings";
import PostHotelData from "../../Partners components/PostHotelData";
import PostVehicleData from "../../Partners components/PostVehicleData";
// import PaymentButton from "./HandlePayment";

export default function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const PaidUser = false;
  return (
    <>
      <Navbar />
      <div className="Partners_section">
        <h2 className="Partner_titel">Welcome to OotyGO Partner Section</h2>
        <div className="Partner_Signup">
          {PaidUser ? (
            <>
              <Mybookings /> <br />
              <PostHotelData />
              <br />
              <PostVehicleData />
            </>
          ) : (
            <div>
              <Subscription />
            </div>
          )}
        </div>
        {/* <PaymentButton/> */}
      </div>
      <Footer />
    </>
  );
}
