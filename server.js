import express from 'express';
import Razorpay from 'razorpay';
import { json } from 'body-parser';
require('dotenv').config();
// import { useAuthenticator } from '@aws-amplify/ui-react';

const app = express();
app.use(json());

const razorpay = new Razorpay({
    key_id: 'rzp_live_c6USxvUANSdD2S',
    key_secret: 'vqnvowxSPYffvq6IHBhQHT4d',
    // key_id: process.env.RAZORPAY_KEY_ID,
    // key_secret: process.env.RAZORPAY_SECRET,
});

app.post('/create-subscription', async (req, res) => {
    
    const { plan_id, customer_id } = req.body;
    try {
        const subscription = await razorpay.subscriptions.create({
            plan_id,
            customer_notify: 1,
            total_count: 12, // Example for monthly subscription for a year
        });
        res.json(subscription);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
