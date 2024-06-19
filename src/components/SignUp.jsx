import React from "react";
import { useEffect } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import "./SignUp.css";
import awsExports from '../aws-exports';
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
Amplify.configure(awsExports);


export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
     
  return (
    <>
    <Navbar/>
    <div className="Signup_contant">
    <Authenticator>
        
        
      {({ signOut, user }) => (
        <main>
          
          <h1>Hello {user.signInDetails.loginId.slice(0,5)}</h1>
          
          <button onClick={signOut}>Sign out</button>
        </main>
        
      )}
      
    </Authenticator>
    </div>
    <Footer/>
    </>
  );
}

