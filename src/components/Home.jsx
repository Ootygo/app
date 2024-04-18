import React from "react";
import Navbar from "../page/Navbar";
import Contant from "../page/Contant";
import Footer from "../page/Footer";
import Time from "../page/Timer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="Home_body">
        <Time />
        <Contant />
      </div>
      <Footer />
    </>
  );
}
export default Home;
