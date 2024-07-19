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
  const iconstyile = { color: "#0787cc" };
  return (
    <>
      <Navbar />
      <div className="About_contant">
        <div className="About_ootygo">
          <h1>About OotyGo</h1>
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
              <p>
                As the Chief Operating Officer (COO) of Ootygo, Vinoth Kumar is
                responsible for overseeing the company's operations and
                management. In this role, he plays a key part in ensuring that
                the company runs efficiently and effectively, overseeing various
                aspects of the business to drive growth and success.
              </p>
            </div>
            <div className="About_Team_member">
              <img src={image4} className="About_img" alt="Team" />
              <h2 className="About_team_title">Ruban - CFO</h2>
              <p>
                As the Chief Financial Officer (CFO) of Ootygo, Ruban is
                responsible for managing all financial aspects of the company.
                In this key role, he oversees financial planning, budgeting, and
                analysis to support the company's overall financial strategy and
                growth. Ruban plays a critical part in ensuring the company's
                financial health and stability.
              </p>
            </div>
            <div className="About_Team_member">
              <img src={image5} className="About_img" alt="Team" />
              <h2 className="About_team_title">Guru - CMO</h2>
              <p>
                As the Chief Marketing Officer (CMO) of Ootygo, Guru is tasked
                with the oversight of the company's marketing activities,
                driving growth, and managing customer relationships. In this
                capacity, Guru assumes a crucial role in formulating and
                executing marketing strategies aimed at enhancing the company's
                brand presence and nurturing strong customer connections.
              </p>
            </div>
          </div>
        </div>
        {/* tecnology using */}
        <div className="About_tec">
          <h2>Technology we use</h2>
          <div className="About_tec_icon">
            <span>
              <svg
                width="50px"
                height="50px"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
                style={iconstyile}
                className="About_icon_size"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </span>
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
                alt="AWS"
                height="50px"
                width="100px"
                className="About_icon_size"
              />
            </span>
            <span>
              <svg
                height="50px"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="50px"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle color-fg-default"
                className="About_icon_size"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
