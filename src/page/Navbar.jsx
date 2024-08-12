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
import logo from "../logo.png";

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 420; // Adjust as needed

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add an initial call to handleResize to set the initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`Navbar ${isScrolled ? "" : "scrolled"}`}>
        <span>
          <Link to="/">
            <span>
              <img className="Navbar_menu2_logo" src={logo} alt="logo" />
            </span>
          </Link>
        </span>

        <span>
          <Link to="/Places" id="Places_btn">
            <span className="Navbar_menu_item">
              {screenWidth < breakpoint ? (
                <FaLocationDot />
              ) : (
                <>
                  <FaLocationDot />
                  Place
                </>
              )}
            </span>
          </Link>
        </span>
        <span>
          <Link to="/Stay" id="Places_btn">
            <span className="Navbar_menu_item">
              {screenWidth < breakpoint ? (
                <RiHotelLine />
              ) : (
                <>
                  <RiHotelLine />
                  Stay
                </>
              )}
            </span>
          </Link>
        </span>

        <span>
          <Link to="/Travel" id="Places_btn">
            <span className="Navbar_menu_item">
              {screenWidth < breakpoint ? (
                <PiVanBold />
              ) : (
                <>
                  <PiVanBold />
                  Travel
                </>
              )}
            </span>
          </Link>
        </span>
        <span>
          <Link to="/Food" id="Places_btn">
            <span className="Navbar_menu_item">
              {screenWidth < breakpoint ? (
                <IoIosRestaurant />
              ) : (
                <>
                  <IoIosRestaurant width="30px" height="30px" />
                  Food
                </>
              )}
            </span>
          </Link>
        </span>
        <span>
          <Link to="/SignUp">
            <span className="Navbar_menu_item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
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
        </span>
      </div>
    </>
  );
}
export default Navbar;
