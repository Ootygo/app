import React from "react";
import Navbar from "../../page/Navbar";
import Footer from "../../page/Footer";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import { Slide } from "react-slideshow-image";
import { useState, useRef, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

const spanStyle = {
  padding: "20px",
  // background: '#efefef',
  color: "#fffff",
};

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
    url: "https://lh5.googleusercontent.com/p/AF1QipPofXqFVd5itArzVYyoK1kcWeukLuktpMoZH5FC=w203-h152-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipP6IFGXM4Qqbezt6lBsfmeGe27xE8ZKkyy7jVuG=w203-h151-k-no",
    caption: "Slide 2",
  },
  {
    url: "",
    caption: "Slide 3",
  },
];

function SimsPark() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
            src="https://lh3.googleusercontent.com/ggs/AF1QipPH_ZgUpjkIwf9Bqj_GYftkygqYbUpMnV-LEdTM=m18?cpn=JxWvwK_yDIYolK3U"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            
          
          ></video>
          <h2 className="slide-container_titel">Dolphin Nose</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Dolphin’s Nose is a popular viewpoint located in Coonoor, Tamil
            Nadu. It provides a spectacular panoramic view of the surrounding
            hills and valleys, with the Catherine Falls visible in the distance.
            The viewpoint is shaped like a dolphin’s nose, hence the name.
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
                    backgroundPosition:`center`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SimsPark;
