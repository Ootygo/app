import React from "react";
// import axios from "axios";
import "./Subscription.css";
import { GoDotFill } from "react-icons/go";
// import { useAuthenticator } from "@aws-amplify/ui-react";
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
      name: "Super Unlimited",
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
  ];

  //   const handleSubscription = async () => {
  //     if (!selectedSubscription) {
  //       alert("Please select a subscription plan and enter your hotel owner ID.");
  //       return;
  //     }

  //     try {
  //       const response = await axios.post(
  //         "https://m17a2fmkr4.execute-api.ap-south-1.amazonaws.com/default/Subfunction",
  //         {
  //           subscriptionId: selectedSubscription,
  //           hotelOwnerId,
  //         }
  //       );
  //       alert("Subscription successful: " + response.data.message);
  //       console.log("res", response);
  //     } catch (error) {
  //       console.error("Subscription failed:", error);
  //       alert("Subscription failed: " + error.message);
  //     }
  //   };

  return (
    <div>
      <h2>Subscribe a plan to start</h2>
      <div className="Plans">
        {subscriptionPlans.map((plan) => (
          <span key={plan.id}>
            <span className="Plan_Selector">
              {/* <input
                type="radio"
                className="Plan_select"
                id={plan.id}
                name="subscription"
                value={plan.id}
                onChange={(e) => setSelectedSubscription(e.target.value)}
              /> */}
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
        * After the subscription, Email the payment & asset details to
        ootygo.official@gmail.com.
      </h5>
      <h5 className="Payment_Email">
        * Within 24 hour the Asset will be displayed on www.ootygo.in.
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
