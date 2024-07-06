import React, { useEffect } from "react";
import Navbar from "../../page/Navbar";
import Footer from "../../page/Footer";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import { Slide } from "react-slideshow-image";
import { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";

const divStyle = {
  display: "flex",
  alignItems: "flex end",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
};
const slideImages = [
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipNCTkNtZSKwkWxC7DSKqu9r4RsFyobi-LGb-5bW=s642-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipND6uK8pR-1C2iTTB8O3qaArGH607YVZvfQdjuy=w203-h152-k-no",
    caption: "Slide 2",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipNGkyHqlYq0Dt3c5rzsy9nSKSSXMKMSIQNZ0G04=w203-h114-k-no",
    caption: "Slide 3",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipONQlGWrKGXt6F2yjbUMXmXacUIFLMC5cN9gAVd=w203-h135-k-no",
    caption: "Slide 3",
  },
];

function OotyBoatHouse() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    videoRef.current.play();
    videoRef.current.currentTime = 3;
    setTimeout(()=>{videoRef.current.pause();},25000);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    // videoRef.current.currentTime = 0; // Optional: Reset video to start
  };
  const [isSpeaking, setIsSpeaking] = useState(false);
  const textRef = useRef(null);
  const speechSynthesisRef = useRef(window.speechSynthesis);

  const speakText = () => {
    // If speech is already in progress, stop it
    if (isSpeaking) {
      speechSynthesisRef.current.cancel();
      setIsSpeaking(false);
    } else {
      // Otherwise, start speaking
      const utterance = new SpeechSynthesisUtterance(
        textRef.current.textContent
      );
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesisRef.current.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="slide-container">
        <div className="video-container">
          <video
            ref={videoRef}
            src="https://lh3.googleusercontent.com/ggs/AF1QipMe3SWHA9Ehk_cIUlKKttasjcvXVTRBB68KnVRh=m18?cpn=pgs1J9_jb7m2yuRo"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Ooty boat house</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Ooty Boat House, also known as Ooty Lake, is a popular tourist
            attraction in Ooty, Tamil Nadu. It’s an artificial lake constructed
            in 1824 and covers an area of 65 acres. The boat house offers
            various boating facilities like paddle boats, row boats, and
            motorboats. It also features a garden, a mini-train, and an
            amusement park. The boat house is open every day from 10:00 AM to
            06:00 PM, and it’s a great place to enjoy the scenic beauty of Ooty
            while boating on the lake.
          </p>

          <button onClick={speakText} className="slide-container_btn">
            <FaMicrophone />
            {isSpeaking ? "Stop" : "Speak"}
          </button>
        </div>
        <div className="Slide_container_img_slide">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundPosition: `center`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OotyBoatHouse;
