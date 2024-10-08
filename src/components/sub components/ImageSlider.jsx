import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import Navbar from "../../page/Navbar";
import Footer from "../../page/Footer";
import { useRef, useState, useEffect } from "react";
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
    url: "https://lh5.googleusercontent.com/p/AF1QipOSEMZpTy8qQZxmcFf7mxwD_tEIBcuofieWJrJb=s642-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://static.wixstatic.com/media/32dd65_463bc513bb134caea7cf31bea48bef8e~mv2.jpg/v1/fit/w_680,h_510,q_90/32dd65_463bc513bb134caea7cf31bea48bef8e~mv2.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/844/138/418/yellow-cosmos-flowers-in-bloom-close-up-photo-wallpaper-preview.jpg",
    caption: "Slide 3",
  },
];

const ImageSlider = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
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
            src="https://lh3.googleusercontent.com/ggs/AF1QipOezG52n1o28P-cj1aAMBghH0RgBo0kAtljhC__=m18?cpn=GhwErVMktctn2xSd"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover-video"
            muted
            loop
            
            controlsList="nodownload"
          ></video>
          <h2 className="slide-container_titel">Pakkasuram malai</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Pakkasuran Malai also known as Droog Fort, is a historic site
            located near Coonoor in the Nilgiris district of Tamil Nadu. It’s
            about 15 kilometers from Coonoor and is known for its scenic beauty
            and panoramic views. The fort was used as an outpost by Tipu Sultan
            in the 18th century, and today, it’s a popular spot for trekking and
            sightseeing
          </p>

          <button onClick={speakText} className="slide-container_btn"><FaMicrophone/>{isSpeaking ? "Stop" : "Speak"}</button>
        </div>
        <div className="Slide_container_img_slide">
          <Slide >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundPosition: `center`,
                    
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
};

export default ImageSlider;
