import Footer from "../../page/Footer";
import Navbar from "../../page/Navbar";
import "./Terms.css";

export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="Terms_contant">
        <h1>Terms & Conditions</h1>
        <p>
          <h3>Service Level Agreement (SLA) for OotyGo</h3> Last Updated Date:
          08-08-2024, 11.00 AM
          <br />
          <h4>Parties Involved:</h4> • Service Provider: OotyGo Technologies
          (www.ootygo.in) <br /> • Customers: All registered users of OotyGo{" "}
          <h4>1. Purpose</h4>
          This SLA outlines the terms and conditions for services provided by
          OotyGo to its customers. <h4>2. Services Provided</h4> • Booking
          Services: Secure and efficient booking of tours, hotels, and taxis.{" "}
          <br /> • Customer Support: Monday to Saturday 10 am to 9 pm support
          for booking-related issues. <h4>3. Service Availability</h4> • Uptime
          Guarantee: OotyGo guarantees 99.9% uptime for its booking platform.{" "}
          <br /> • Maintenance: Scheduled maintenance will be communicated at
          least 48 hours in advance. <h4>4. Response and Resolution Time</h4> •
          Response Time: All customer inquiries will be responded to within 48
          hours. <br /> • Resolution Time: Issues will be resolved within 72
          hours from the time of reporting. <h4>5. Security and Compliance</h4>{" "}
          • Data Security: OotyGo complies with GDPR to ensure the security of
          customer data. <br /> • Fraud Prevention: Continuous monitoring and
          fraud detection mechanisms are in place.{" "}
          <h4>6. Penalties and Remedies</h4> • Service Credits: If OotyGo fails
          to meet the uptime guarantee, customers will receive a 5% discount on
          their next booking.
          <h4>7. Responsibilities</h4> • OotyGo: Ensure the platform is
          operational and provide timely support. <br /> • Customers: Provide
          accurate information and comply with the terms of service.{" "}
          <h4>8. Amendments</h4> • Amendment Procedure: This SLA may be amended
          with mutual consent of both parties. Any amendments will be
          communicated in Email.
        </p>
      </div>
      <Footer />
    </>
  );
}
