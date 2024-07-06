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

function BotanicalGarden() {

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
            src="https://lh3.googleusercontent.com/ggs/AF1QipMFSshcxiFvdcP7DPgsFCUu76H7uwhPlAIaup92=m18?cpn=Wi_TQgxmEMlGJSHS"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Botanical Garden</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            The Botanical Gardens in Ooty is a major tourist attraction and is
            well-known for its lush green lawns, rare plant species, and a
            variety of trees. Spread over 22 hectares, the garden is maintained
            by the Tamil Nadu Horticulture Department. It’s famous for the
            Fossil Tree Trunk that is believed to be 20 million years old, the
            Italian-style garden borders, and the annual flower show held in
            May.
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

export default BotanicalGarden;
