import React, { useEffect } from "react";
import Navbar from "../page/Navbar";
import Contant from "../page/Contant";
import Footer from "../page/Footer";
import Time from "../page/Timer";
import "./Home.css";
import vid from '../assets/WhatsApp Video 2024-07-22 at 22.29.52_4d648a3b.mp4'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="Home_body">
        <div className="Home_video_container">
          
          <video
            src={vid}
            playbackRate="0.5"
            loop
            muted
            autoPlay
            width="100%"
            className="Home_video"
            
            controlsList="nodownload"
          ></video>
          <h1 className="Home_video_titel"></h1>
          <div className="gradient-overlay"></div>
        </div>
        <Time />
        <Contant />
      </div>
      <Footer />
    </>
  );
}
export default Home;
