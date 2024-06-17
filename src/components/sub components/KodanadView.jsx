import React from "react";
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
    url: "https://lh5.googleusercontent.com/p/AF1QipOSEMZpTy8qQZxmcFf7mxwD_tEIBcuofieWJrJb=w203-h152-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipOWlraHBZDf_tSKTObIpD3pFiIKlsTEKoPtTE_t=w203-h152-k-no",
    caption: "Slide 2",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipOD3-wCdY-RSArZ4XOEMDRzDPMqVIOpGxG5TmaA=w203-h152-k-no",
    caption: "Slide 3",
  },
];

function KodanadView() {
  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    videoRef.current.play();
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
            src="https://lh3.googleusercontent.com/ggs/AF1QipPemjutBcNVWAEECNQm31T9Juaij-tlA8n-JJL-=m18?cpn=WM3fVgrFQkBVHczz"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Kodanad View Point</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Kodanad View Point is a renowned tourist spot near Coonoor, offering
            breathtaking views of the Nilgiri hills and the surrounding
            landscapes. It’s located about 16 km from Kotagiri and can be
            reached in approximately 30 minutes by vehicle. Visitors can enjoy
            panoramic views of the Mysore Plateau, the farming cooperative of
            Thengumarahada, and the Moyar river.
          </p>

          <button onClick={speakText} className="slide-container_btn">
            <FaMicrophone />
            {isSpeaking ? "Stop" : "Speak"}
          </button>
        </div>
        <div>
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

export default KodanadView;
