import React from "react";
import axios from "axios";

const HandlePayment = async () => {
  const orderUrl = "https://g87p8h4853.execute-api.ap-south-1.amazonaws.com";
  const { data } = await axios.post(orderUrl, { amount: 10 }); // amount in INR

  const options = {
    key: "OhtNTKXezNMliJ",
    amount: data.amount,
    currency: data.currency,
    name: "OotyGO",
    description: "Test Transaction",
    order_id: data.id,
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "kavi",
      email: "your.email@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "5/175, kakaachi",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const PaymentButton = () => {
  return (
    <div>
      <button onClick={HandlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentButton;
