import React from 'react';

const RazorpaySubscription = () => {
  const handlePayment = async () => {
    const response = await fetch('/create-subscription', { method: 'POST' });
    const data = await response.json();

    const options = {
      key: 'YOUR_KEY_ID',
      subscription_id: data.id,
      name: 'Hotel Booking App',
      description: 'Subscription for uploading hotels',
      handler: function (response) {
        alert('Payment successful!');
        // Handle successful payment here
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment}>
      Subscribe
    </button>
  );
};

export default RazorpaySubscription;
