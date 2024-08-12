import React, { useEffect } from "react";
import Footer from "../../page/Footer";
import Navbar from "../../page/Navbar";
import './Partners.css';
import PostHotelData from "../../Partners components/PostHotelData";
import PostVehicleData from "../../Partners components/PostVehicleData";
// import PaymentButton from "./HandlePayment";


export default function Partners(){
    useEffect(()=>{window.scrollTo(0, 0)},[])
    return(
        <>
        <Navbar/>
        <div className="Partners_section">
            <h2 className="Partner_titel">
                Welcome to OotyGO Partner Section
            </h2>
            <div className="Partner_Signup">
                <PostHotelData/><br />
                <PostVehicleData/>
            </div>
           {/* <PaymentButton/> */}
        </div>
        <Footer/>
        </>
    );
};