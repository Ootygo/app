import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import "./Places.css";
import { Link } from "react-router-dom";
import "../components/sub components/ImageSlider";
import "../components/sub components/SimsPark";

export default function Places() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="Places_contant">
        <h1 className="Places_contant_titel">Top 10 Place</h1>
        <div className="Places_contant_item">
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">1</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran Malai</h3>
        </div>

        <div>
          <div className="Place_contant_place">
            <Link to="/SimsPark">
              <img
                className="Place_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipPGsnyrpXJK4zxyDCYu__AwH4RRj_uf-VdQSxZH=w203-h135-k-no"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">2</span>
          </div>
          <h3 className="Places_contant_sub">Smis Park</h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/DolphinNone">
              <img
                className="Place_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipPhZFrA0JgCbKCxDHJStQucfFSnSNZwG7goLUcH=w203-h152-k-no"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">3</span>
          </div>
          <h3 className="Places_contant_sub">Dolphin Nose</h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipPhZFrA0JgCbKCxDHJStQucfFSnSNZwG7goLUcH=w203-h152-k-no"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">4</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">5</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">6</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">7</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">8</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">9</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
        <div>
          <div className="Place_contant_place">
            <Link to="/ImageSlider">
              <img
                className="Place_contant_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU"
                alt="img"
              />
            </Link>
            <span className="Places_contant_counts">10</span>
          </div>
          <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
