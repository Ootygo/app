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
    url: "https://lh5.googleusercontent.com/p/AF1QipOiywnOCN9-_-OHI5vWC10uK7gBjUUyUUqFu9K5=w203-h151-k-no",
    caption: "Slide 1",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipMGXgytigE33oX_D0Ez-HStG6-ZX6i2rCwE91-M=w203-h135-k-no",
    caption: "Slide 2",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipPX70nvfaJQsa-t6UjdLQqOSSIk83kb66nihK7a=w203-h152-k-no",
    caption: "Slide 3",
  },
];

function KateriPark() {
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
            src="https://lh3.googleusercontent.com/ggs/AF1QipN4oXRzbquPWWu7PtwSh_FJwm71aP9l-ssvBsvG=m18?cpn=J9rL0Z-j7BoF9JUZ"
            className="hover-video"
            muted
            loop
            controlsList="nodownload"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <h2 className="slide-container_titel">Kateri Park</h2>
          <p className="slide-container_titel_contant" ref={textRef}>
            Kattery Park in Coonoor is a delightful haven for nature enthusiasts
            and flower lovers. The Park is situated just 7 kilometers away from
            the center of Coonoor. This well-maintained park spans 5.5 acres and
            boasts a stunning collection of colorful and fascinating flowers.
            It’s a paradise for sightseers and wanderers alike.
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

export default KateriPark;
