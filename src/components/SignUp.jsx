import React, { useEffect } from "react";
import { Authenticator, CheckboxField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./SignUp.css";
import awsExports from "../aws-exports";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Amplify.configure(awsExports);

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Partners");
  };
  const handleClickSup = () => {
    navigate("/Support");
  };
  const components = {
    SignUp: {
      FormFields() {
        return (
          <>
            <Authenticator.SignUp.FormFields />
            <div>
              <span className="Terms_Link">
                <CheckboxField
                  label="I agree to the following"
                  name="terms"
                  value="yes"
                  required
                />
              </span>
              <span className="Terms_Link">
                <Link to="/Terms">SLA, Terms & Conditions, Privacy Policy</Link>
              </span>
            </div>
          </>
        );
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="Signup_contant">
        <div className="Signup_section">
          <Authenticator components={components}>
            {({ signOut, user }) => (
              <>
                <main>
                  <h1 className="Signup_User_greet">
                    Hello! <br />
                    {user.signInDetails.loginId}
                  </h1>
                  <div className="User_Profile_Section">
                    <button className="Signin_btns" onClick={handleClickSup}>
                      Support
                    </button>
                    <button className="Signin_btns" onClick={handleClick}>
                      Partner
                    </button>
                    <button onClick={signOut} className="Signin_btns">
                      Sign out
                    </button>
                  </div>
                </main>
              </>
            )}
          </Authenticator>
        </div>
      </div>
      <Footer />
    </>
  );
}
