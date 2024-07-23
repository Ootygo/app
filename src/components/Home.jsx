import React, { useEffect } from "react";
import Navbar from "../page/Navbar";
import Contant from "../page/Contant";
import Footer from "../page/Footer";
import Time from "../page/Timer";
import "./Home.css";

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
            src="https://videos.pexels.com/video-files/17780427/17780427-hd_1920_1080_60fps.mp4"
            playbackRate="0.5"
            loop
            muted
            autoPlay
            width="100%"
            className="Home_video"
            
            controlsList="nodownload"
          ></video>
          <h1 className="Home_video_titel">Welcome to Ooty</h1>
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
