import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import './Places.css';

export default function Places() {

    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className="Places_contant">
            
            <div>
                <h2 className="Places_contant_title">Ooty</h2>
                <img className="Place_contant_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU" alt="img" />
                <h3 className="Places_contant_sub">Pakkasuran malai View </h3>
                <span className="Places_contant_about">This is ooty, ooty is the best place in india  </span>
            </div>
            <div>
                <h2 className="Places_contant_title">Ooty</h2>
                <img className="Place_contant_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU" alt="img" />
                <h3 className="Places_contant_sub">About</h3>
                <span className="Places_contant_about">This is ooty, ooty is the best place in india  </span>
            </div><div>
                <h2 className="Places_contant_title">Ooty</h2>
                <img className="Place_contant_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTP4KyHavTvldxZg_XFcvxWV0Y2tpgX62_2w&usqp=CAU" alt="img" />
                <h3 className="Places_contant_sub">About</h3>
                <span className="Places_contant_about">This is ooty, ooty is the best place in india  </span>
            </div>
           
        </div>
        <div>
          <Footer/>
        </div>
        </>
    )
}