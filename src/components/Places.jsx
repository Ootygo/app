import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import "./Places.css";
import { Link } from "react-router-dom";
import "../components/sub components/ImageSlider";
import "../components/sub components/SimsPark";
import "../components/sub components/KodanadView";
import "../components/sub components/Dottabetta";
import "../components/sub components/OotyBoatHouse";
import "../components/sub components/KateriPark";
import { useEffect } from "react";

export default function Places() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="Places_contant">
        <h1 className="Places_contant_titel">Top 10 Place</h1>
        <div className="Places_contant_item">
          <div>
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
              <Link to="/KodanadView">
                <img
                  className="Place_contant_img"
                  src="https://lh5.googleusercontent.com/p/AF1QipN-C95XwK6aLoNqswOvANE3-9udO6GRkY_3wWXb=w203-h152-k-no"
                  alt="img"
                />
              </Link>
              <span className="Places_contant_counts">4</span>
            </div>
            <h3 className="Places_contant_sub">Kodanad View Point</h3>
          </div>

          <div>
            <div className="Place_contant_place">
              <Link to="/Dottabetta">
                <img
                  className="Place_contant_img"
                  src="https://lh5.googleusercontent.com/p/AF1QipPjBtIwEU1uFVsTdRNgRWHoP4YApZiIafMO9c7S=w203-h151-k-no"
                  alt="img"
                />
              </Link>
              <span className="Places_contant_counts">5</span>
            </div>
            <h3 className="Places_contant_sub">Doddabetta Peak</h3>
          </div>

          <div>
            <div className="Place_contant_place">
              <Link to="/BotanicalGarden">
                <img
                  className="Place_contant_img"
                  src="https://lh5.googleusercontent.com/p/AF1QipOH4_jJAAQKCG02x9tTSgoop_wFUkJggVEfIsBb=w203-h152-k-no"
                  alt="img"
                />
              </Link>
              <span className="Places_contant_counts">6</span>
            </div>
            <h3 className="Places_contant_sub">Botanical Garden</h3>
          </div>

          <div>
            <div className="Place_contant_place">
              <Link to="/OotyBoatHouse">
                <img
                  className="Place_contant_img"
                  src="https://lh5.googleusercontent.com/p/AF1QipPINTGLkf0trqBTO3HJIZ9EfmkyG_wI3v0h_fau=w203-h114-k-no"
                  alt="img"
                />
              </Link>
              <span className="Places_contant_counts">7</span>
            </div>
            <h3 className="Places_contant_sub">Ooty boat house</h3>
          </div>

          <div>
            <div className="Place_contant_place">
              <Link to="/KateriPark">
                <img
                  className="Place_contant_img"
                  src="https://lh5.googleusercontent.com/p/AF1QipNfddUt-9Ko0Brcjkfq4CDnMVqkvKes1WbOSEaS=w203-h152-k-no"
                  alt="img"
                />
              </Link>
              <span className="Places_contant_counts">8</span>
            </div>
            <h3 className="Places_contant_sub">Kateri Park</h3>
          </div>

          <div>
            
            <h4 className="Places_contant_sub">More places are arriving soon.</h4>
          </div>

          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
