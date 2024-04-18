import React from "react";
import "./Navbar.css";

import "bootstrap";
import "../components/Places";

function Navbar() {
  return (
    <>
      <div className="Navbar">
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
        <span className="Navbar_menu_item">
         
            Place
        
        </span>
        <span className="Navbar_menu_item">
       
            Stay
        
        </span>
        <span>
         
            <img
              className="Navbar_menu2_logo"
              src="https://img1.wsimg.com/isteam/ip/ab7cd702-ceba-4c53-a312-1a0951af6c3a/LOGO.jpg/:/rs=h:175,m"
              alt="logo"
            />
       
        </span>
        <span className="Navbar_menu_item">
          
            Travel
        
        </span>
        <span className="Navbar_menu_item">Food</span>
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
      </div>
    </>
  );
}
export default Navbar;
