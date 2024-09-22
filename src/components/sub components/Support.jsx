import "./Support.css";
import Navbar from "../../page/Navbar";
import Footer from "../../page/Footer";
export default function Support() {
  return (
    <>
      <Navbar />
      <div className="Support_contant">
        <h1 className="Support_titel">For Support</h1>
        <h4>Email: ootygo.official@gmail.com</h4>
        <h4>
          Call: Support  
          <button onClick={() => (window.location.href = `tel:8838724178`)}>
            team
          </button>
        </h4>
      </div>
      <Footer />
    </>
  );
}
