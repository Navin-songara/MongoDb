require("dotenv").config();
const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();

router.post("/order/:amt", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: req.params.amt,
            currency: "INR",
            receipt: "receipt_order_74396"
        };

        const order = await instance.orders.create(options);
        if (!order) {
            return res.status(500).send("Some Error Occurred");
        }
        res.json(order);
    } catch (err) {
        res.status(500).send(err);
    }
});

// success page
router.post('/success', async (req, res) => {
    res.send("Payment Successfully Done ");
});

module.exports = router;