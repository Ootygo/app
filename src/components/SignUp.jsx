import React from "react";
import { useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./SignUp.css";
import awsExports from "../aws-exports";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
Amplify.configure(awsExports);

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="Signup_contant">
        <div className="Signup_section">
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1 className="Signup_User_greet">Hello! <br />{user.signInDetails.loginId}</h1>
                <div className="User_Profile_Section">
                  <button>My bookings</button>
                  <button>Support</button>
                  <button onClick={signOut}>Sign out</button>
                </div>
              </main>
              
            )}
          </Authenticator>
        </div>
      </div>
      <Footer />
    </>
  );
}
