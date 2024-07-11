import "./App.css";
import {Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Places from "./components/Places";
import Stay from "./components/Stay";
import Travel from "./components/Travel";
import Food from "./components/Food";
import SignUp from "./components/SignUp";
import ImageSlider from "./components/sub components/ImageSlider";
import SimsPark from "./components/sub components/SimsPark";
import DolphinNose from "./components/sub components/DolphinNose";
import KodanadView from "./components/sub components/KodanadView";
import Dottabetta from "./components/sub components/Dottabetta";
import BotanicalGarden from "./components/sub components/BotanicalGarden";
import About from "./components/About";
import OotyBoatHouse from "./components/sub components/OotyBoatHouse";
import KateriPark from "./components/sub components/KateriPark";
import IdleTimerComponent from "./components/IdleTimerComponent";




const App = () => {
  return (
    <>
      <div>
        <IdleTimerComponent />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Stay" element={<Stay />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SimsPark" element={<SimsPark />} />
          <Route path="/DolphinNone" element={<DolphinNose />} />
          <Route path="/ImageSlider" element={<ImageSlider />} />
          <Route path="/KodanadView" element={<KodanadView />} />
          <Route path="/Dottabetta" element={<Dottabetta />} />
          <Route path="/BotanicalGarden" element={<BotanicalGarden />} />
          <Route path="/About" element={<About />} />
          <Route path="/OotyBoatHouse" element={<OotyBoatHouse />} />
          <Route path="/KateriPark" element={<KateriPark />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
