import Footer from "../page/Footer";
import Navbar from "../page/Navbar";
import "./Food.css";
import { useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Food() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="Food_contant">
          <div className="Food_contant_title">
            <h1 id="Food_contant_title">See Ooty's Menu</h1>
          </div>
          <div className="Food_contant_item">
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">Hotel Taj</h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipOq80mTk-fK8xK1lb_DHEMN4pm42ymTYr20IhxM=w203-h270-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/ZyiNN8TZKm24MSEh6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>

              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">A2B</h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipN9FC7ARExX6XlxfL4NLg2F6LCw3vu2_XMsE9_f=w203-h152-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/JxxBxuAGxsVF8wRt7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>
              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">Hotel Junior Kuppanna</h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipMPDsRRnvSpyT_fpU6R0UW4eAo6RDOhMVebFkKq=w203-h152-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/5GUkuh5GvbmCGSjH7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>
              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">
                Hyderabad Biryani House
              </h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipNnPBiNFjd51we2mCzRoSTcY8USlnZ25F8cjmtL=w203-h152-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/QJYrSFfHV5cV6ARLA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>
              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">KFC</h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipM8Sr4Eifk0ZnPCinZ2vMCZ-147lxoAJj6DkH_g=s551-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/owLLXvdgUqFbJHo9A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>
              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
            <div className="Food_contant_items">
              <h2 className="Food_contant_Item_title">Domino's Pizza</h2>
              <img
                className="Food_contant_img"
                src="https://lh5.googleusercontent.com/p/AF1QipPvD9erg_c3BvOjT6go-ngb7Z8fWKh9XAKjKs9o=w203-h270-k-no"
                alt="img"
              />

              <div className="Food_hotel_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span>
                  <Link
                    to="https://maps.app.goo.gl/KwVN8UBNK9W73cvdA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot />
                  </Link>
                </span>
              </div>
              <button className="Food_Hotel_Menu_Btn">View Menu</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
