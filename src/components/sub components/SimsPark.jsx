import React from "react";
import Navbar from "../../page/Navbar";
import Footer from "../../page/Footer";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import { Slide } from "react-slideshow-image";
import { useState, useRef, useEffect } from "react";
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
    url: "https://www.ootyindia.com/pictures/travel/sims-park-15.jpeg",
    caption: "Slide 1",
  },
  {
    url: "https://www.karthitravels.com/images/new/coonoor/simspark4.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://media1.thrillophilia.com/filestore/d86d5oth982orkcpj7n7wb7y7lwu_1556094772_shutterstock_454025866.jpg?w=400&dpr=2",
    caption: "Slide 3",
  },
];

function SimsPark() {
  useEffect(()=>{
    window.scroolTp(0, 0);
  },[]);

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
            src="https://lh3.googleusercontent.com/ggs/AF1QipNXjHxTzcxyqeEIAVc1Aou-XOHyPX6CzhC2UEnC=m18?cpn=dEbCFKes6PUcJ4vZ"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Smis Park</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Sim’s Park in Coonoor is a beautiful botanical garden and a popular
            tourist attraction. The park is home to over 1000 species of colorful
            and vibrant flowers and is divided into several sections, including
            a small Lily pond, a rose garden, a boating area, and an area for
            flowering plants.
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
