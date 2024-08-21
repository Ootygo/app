import React, { useEffect} from "react";
import { Authenticator, CheckboxField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./SignUp.css";
import awsExports from "../aws-exports";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import { Link } from "react-router-dom";
Amplify.configure(awsExports);

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const components = {
    SignUp: {
      FormFields() {
        return (
          <>
            <Authenticator.SignUp.FormFields />

            <CheckboxField
              label="I agree to the terms and conditions"
              name="terms"
              value="yes"
              
              required
            />
            <Link to="/Terms">SLA, Terms & Conditions, Privacy Policy</Link>
            
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
                    <button className="Signin_btns">My bookings</button>
                    <button className="Signin_btns">Support</button>
                    <button onClick={signOut} className="Signin_btns">
                      Sign out
                    </button>
                  </div>
                  <div className="Signup_Partners">
                    <Link to="/Partners">
                      <button className="Signin_btns">Partner</button>
                    </Link>
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
