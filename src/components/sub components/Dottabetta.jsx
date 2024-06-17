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
    url: "https://lh5.googleusercontent.com/p/AF1QipOUqgLtDj7PR979FcXTbLJR_PEfe5-vwEvx1zAa=s917-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipMUmgjAdu5Tf8lqnveIaDz6q6DixrPEC7wlNtsc=w221-h100-k-no",
    caption: "Slide 2",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipNQ_mbqzSdzukNN9vpT1FFk3jnl_Go7wcAzKMdi=w203-h114-k-no",
    caption: "Slide 3",
  },
];

function Dottabetta() {
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
            src="https://lh3.googleusercontent.com/ggs/AF1QipMRuxMh8_njzYiEjjdgY45HIIy_MHWNnrETgzWN=m18?cpn=DIciR8MDPKEyPxMb"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Doddabeta view point</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Doddabetta is the highest mountain in the Nilgiri Hills, at 2,637
            metres (8,652 feet). It’s located around 9 km from Ooty, in the
            state of Tamil Nadu. The Doddabetta Viewpoint offers a beautiful
            panoramic view of the Nilgiris and is a popular spot for photography
            and sightseeing.
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

export default Dottabetta;
