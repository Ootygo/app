import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap";
import "../components/Places";
import "../components/Home";
import "../components/Stay";
import "../components/Travel";
import "../components/SignUp";
import { FaLocationDot } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";
import { PiVanBold } from "react-icons/pi";
import { IoIosRestaurant } from "react-icons/io";
import { useState, useEffect } from "react";
import logo from "../logo1.png"
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`Navbar ${isScrolled ? "scrolled" : ""}`}>
      <span>
          <Link to="/">
            <span>
              <img
                className="Navbar_menu2_logo"
                src={logo}
                alt="logo"
              />
            </span>
          </Link>
        </span>
        {/* <span>
          <Link to="/" id="Home_btn">
            <span className="Navbar_menu_item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </span>
          </Link>
        </span> */}
        <span>
          <Link to="/Places" id="Places_btn">
            <span className="Navbar_menu_item">
              <FaLocationDot />
              Place
            </span>
          </Link>
        </span>
        <span>
          <Link to="/Stay" id="Places_btn">
            <span className="Navbar_menu_item">
              <RiHotelLine />
              Stay
            </span>
          </Link>
        </span>
        
        <span>
          <Link to="/Travel" id="Places_btn">
            <span className="Navbar_menu_item">
              <PiVanBold />
              Travel
            </span>
          </Link>
        </span>
        <Link to="/Food" id="Places_btn">
          <span className="Navbar_menu_item">
            <IoIosRestaurant />
            Food
          </span>
        </Link>
        <Link to="/SignUp">
          <span className="Navbar_menu_item">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}
export default Navbar;
