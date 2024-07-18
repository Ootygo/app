import React from "react";
import "./Travel.css";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import { useEffect } from "react";

import { MdVerified } from "react-icons/md";

export default function Travel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

                <select
                  name="Package"
                  id="pack"
                  className="Travel_contant_location"
                  
                >
                  <option value="">Select</option>
                  <option value="pac">1 Day Trip</option>
                  <option value="pac">2 Day Trip</option>
                  <option value="pac">3 Day Trip</option>
                  <option value="pac">Couple special</option>
                  <option value="pac">Family Frindly</option>
                  <option value="pac">Gang Trip</option>
                  <option value="pac">School & College</option>
                </select>
              </div>
              <div>
                <h4 className="Travel_contant_search_title">Date</h4>
                <input type="date" className="Travel_contant_date" />
              </div>
            </div>
            <div className="Travel_contant_search_btns">
              <button className="Travel_contant_search_btn" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="Travel_vehicles">
          <h2 className="Travel_vehicles_title">
            Our Authorized Travel Partners
          </h2>
          <div className="Travel_vehicle_items">
            <div className="Travel_vehicle_item">
              <img
                src="https://content.jdmagicbox.com/comp/trichy/k8/0431px431.x431.210112234021.e7k8/catalogue/kk-tours-and-travels-manachanallur-trichy-tempo-travellers-on-rent-tfe7ku79yu.jpg"
                alt="Sivamayam"
                height="200px"
                width="300px"
              />
              <h3>
                Sivamayam travels
                <span>
                  <MdVerified />
                </span>
              </h3>
              <p>cell: 9787617***</p>
            </div>
            <div className="Travel_vehicle_item">
              <img
                src="https://media.zigcdn.com/media/model/2023/Apr/front-1-4-left-28113912_600x400.jpg"
                alt="Sivamayam"
                height="200px"
                width="300px"
              />
              <h3>
                Kutty travels
                <span>
                  <MdVerified />
                </span>
              </h3>
              <p>cell: 9789334***</p>
            </div>
            <div className="Travel_vehicle_item">
              <img
                src="https://cdni.autocarindia.com/ExtraImages/20210713115737_Buying_Used_Swift_1.jpg"
                alt="Sivamayam"
                height="200px"
                width="300px"
              />
              <h3>
                Shobana travels
                <span>
                  <MdVerified />
                </span>
              </h3>
              <p>cell: 9025897***</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
