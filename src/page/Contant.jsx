import React from "react";
import "./Contant.css";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function Contant() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  // const [isShown3, setIsShown3] = useState(false);
  // const [isShown4, setIsShown4] = useState(false);
  // const [isShown5, setIsShown5] = useState(false);
  // const [isShown6, setIsShown6] = useState(false);
  // const [isShown7, setIsShown7] = useState(false);
  // const [isShown8, setIsShown8] = useState(false);

  return (
    <>
      <div className="Cantant">
        <div className="Contant_1">
          <div className="kavi">
            <span
              onClick={() => {
                setIsShown1(true);
              }}
            >
              {isShown1 ? (
                <iframe
                  className="Contant_video"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/veP1TLzbHVE?si=RQIAaHgU6Vn8_AI5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  aria-controls="none"
                ></iframe>
              ) : (
                <img
                  className="Contant_img"
                  src="https://img1.wsimg.com/isteam/stock/7PBRZg/:/cr=t:0%25,l:18.9%25,w:62.2%25,h:100%25/rs=w:365,h:365,cg:true"
                  alt="wild life"
                />
              )}
            </span>
            <button
              onClick={() => {
                setIsShown1(false);
              }}
              className={
                isShown1 ? "Contant_video_active" : "Contant_video_inactive"
              }
            >
              <MdOutlineCancel />
            </button>
            <h3 className="Contant_Title">Wildlife</h3>
          </div>
          <div className="kavi">
            <span
              onClick={() => {
                setIsShown2(true);
              }}
            >
              {isShown2 ? (
                <iframe
                  className="Contant_video"
                  src="https://www.youtube.com/embed/VUnHrvEUTZA?si=-_IRU1AK0ICaXaVE"
                  title="video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  referrerpolicy="strict-origin-when-cross-origin"
                 
                ></iframe>
              ) : (
                <img
                  className="Contant_img"
                  src="https://img1.wsimg.com/isteam/stock/119448/:/cr=t:0%25,l:16.68%25,w:66.65%25,h:100%25/rs=w:365,h:365,cg:true"
                  alt="2"
                />
              )}
            </span>
            <button
              onClick={() => {
                setIsShown2(false);
              }}
              className={
                isShown2 ? "Contant_video_active" : "Contant_video_inactive"
              }
            >
              <MdOutlineCancel />
            </button>
            <h3 className="Contant_Title">Roads</h3>
          </div>
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://img1.wsimg.com/isteam/stock/xq8Z96G/:/cr=t:0%25,l:16.63%25,w:66.75%25,h:100%25/rs=w:365,h:365,cg:true"
              alt="3"
            />
            <h3 className="Contant_Title">River</h3>
          </div>
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://img1.wsimg.com/isteam/stock/107465/:/cr=t:0%25,l:16.64%25,w:66.73%25,h:100%25/rs=w:365,h:365,cg:true"
              alt="2"
            />
            <h3 className="Contant_Title">View</h3>
          </div>
        </div>

        <div className="Contant_2">
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://lh5.googleusercontent.com/p/AF1QipPTgKUeJSk9BTUD4faTSw-tkUh-xkde9iU-zj3B=w203-h133-k-no"
              alt="4"
            />
            <h3 className="Contant_Title">Train</h3>
          </div>
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://img1.wsimg.com/isteam/stock/NByx9an/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true"
              alt="5"
              width="300px"
            />
            <h3 className="Contant_Title">Rain</h3>
          </div>
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://img1.wsimg.com/isteam/stock/10914/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true"
              alt="6"
            />
            <h3 className="Contant_Title">People</h3>
          </div>
          <div className="kavi">
            <img
              className="Contant_img"
              src="https://img1.wsimg.com/isteam/stock/109408/:/cr=t:0%25,l:16.68%25,w:66.65%25,h:100%25/rs=w:365,h:365,cg:true"
              alt="2"
            />
            <h3 className="Contant_Title">Boat</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contant;
