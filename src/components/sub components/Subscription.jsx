import React from "react";
// import axios from "axios";
import "./Subscription.css";
import { GoDotFill } from "react-icons/go";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useAuthenticator } from "@aws-amplify/ui-react";
const SubscriptionComponent = () => {
  //   const [selectedSubscription, setSelectedSubscription] = useState("");
  //   const { hotelOwnerId } = useAuthenticator((context) => [context.user]);

  const subscriptionPlans = [
    {
      id: "plan_1",
      name: "Basic",
      price: (
        <div>
          <p className="Price">₹ 199/month</p>
          <p>
            <GoDotFill /> 1 Asset can be add
          </p>
          <p>
            <GoDotFill /> 3 Photos 1 Video
          </p>
          <p>
            <GoDotFill /> Listed Normal
          </p>
        </div>
      ),
      paylink: "https://rzp.io/i/3vZ9oIx9b",
    },
    {
      id: "Plan_2",
      name: "Super",
      price: (
        <div>
          <p className="Price">₹ 499/month</p>
          <p>
            <GoDotFill /> Up To 5 Asset
          </p>
          <p>
            <GoDotFill /> 6 Photos 2 Video/Asset
          </p>
          <p>
            <GoDotFill /> Listed In The Top 10
          </p>
        </div>
      ),
      paylink: "https://rzp.io/i/ia4MEfWk",
    },
    {
      id: "plan_3",
      name: "Super Ultimate",
      price: (
        <div>
          <p className="Price">₹ 999/month</p>
          <p>
            <GoDotFill /> Up To 10 Assets
          </p>
          <p>
            <GoDotFill /> 10 Photos 3 Video/Asset
          </p>
          <p>
            <GoDotFill /> Listed In The Top 5
          </p>
        </div>
      ),
      paylink: "https://rzp.io/i/L3gwPQ3H9",
    },
    {
      id: "plan_4",
      name: "Mega Plan",
      price: (
        <div>
          <p className="Price">₹ 4999/month</p>
          <p>
            <GoDotFill /> Advertise on the home page & Social Media
          </p>
          <p>
            <GoDotFill /> Attract more guests
          </p>
          <p>
            <GoDotFill /> Priority recommendation
          </p>
        </div>
      ),
      paylink: "https://rzp.io/i/ImZOZj00PO",
    },
  ];

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${9655062118}&text=${encodeURIComponent(
      `Hi this is ${user.signInDetails.loginId}, i have subscribed to OotyGo`
    )}`;
    window.open(url, "_blank");
  };
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <div>
      <h2>Subscribe a plan to start</h2>
      <div className="Plans">
        {subscriptionPlans.map((plan) => (
          <span key={plan.id}>
            <span className="Plan_Selector">
              <h3>{plan.name}</h3>
              <label>{plan.price}</label>
              <button className="Sub_Btn">
                <a href={plan.paylink}>Pay Now</a>
              </button>
            </span>
          </span>
        ))}
      </div>
      <h5 className="Payment_Email">
        * After the subscription, send the payment & KYC (Any Id) details  to
        ootygo.official@gmail.com. Or{" "}
        <FaSquareWhatsapp onClick={openWhatsApp} className="Sub_Wahtsapp"/>
      </h5>
      <h5 className="Payment_Email">
        * After a basic verification the Asset will be displayed on
        www.ootygo.in.
      </h5>
      <h5 className="Payment_Email">
        * For support{" "}
        <button onClick={() => (window.location.href = `tel:8838724178`)}>
          Call
        </button>
      </h5>
      {/* <button onClick={handleSubscription} className="Sub_Btn_non"></button> */}
    </div>
  );
};

export default SubscriptionComponent;