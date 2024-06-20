import React from "react";
import "./About.css";
import image1 from "../assets/images/kavi.png";
import image2 from "../assets/images/dinesh.png";
import image3 from "../assets/images/vinoth.png";
import image4 from "../assets/images/ruban.png";
import image5 from "../assets/images/guru.png";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="About_contant">
        <div className="About_ootygo">
          <h1>About Ootygo,</h1>
          <p>
            The head office of Ootygo Technology is located in the picturesque
            town of Ooty. Ootygo is a website dedicated to providing
            comprehensive support for tour and travel services, ensuring that
            tourists and travelers receive top-notch assistance and the finest
            experiences.
          </p>
        </div>
        <div className="About_OurTeam">
          <h2>Meet our team</h2>
          <div className="About_team_members">
            <div className="About_Team_member">
              <img src={image1} className="About_img" alt="Team" />
              <h2 className="About_team_title">Kaviyarasan - CEO</h2>
              <p>
                Kaviyarasan Magendran serves as the Chief Executive Officer of
                OotyGo Technology, a company specializing in tour and travel
                management services. The company has established itself as a
                leader in providing high-quality services to travelers and
                tourists. Additionally, Kaviyarasan holds the distinction of
                being one of the co-founders of OotyGo, playing a pivotal role
                in the organization's foundation and growth.
              </p>
            </div>
            <div className="About_Team_member">
              <img src={image2} className="About_img" alt="Team" />
              <h2 className="About_team_title">Dinesh - CTO</h2>
              <p>
                Dinesh Ramalingam is responsible for overseeing development,
                Testing, policies, and practices, as well as for facilitating
                cross-company technology efforts. He is a key figure in driving
                innovation and developing proprietary technology across ootygo
                businesses. As the Chief Technology Officer (CTO) of Ootygo
                starting from 2023, he plays a pivotal role in the development
                and implementation of new technologies in web development.
              </p>
            </div>
            <div className="About_Team_member">
              <img src={image3} className="About_img" alt="Team" />
              <h2 className="About_team_title">Vinoth - COO</h2>
            </div>
            <div className="About_Team_member">
              <img src={image4} className="About_img" alt="Team" />
              <h2 className="About_team_title">Ruban - CFO</h2>
            </div>
            <div className="About_Team_member">
              <img src={image5} className="About_img" alt="Team" />
              <h2 className="About_team_title">Guru - CMO</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
