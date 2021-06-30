const express = require("express");
const cors = require("cors");

const { v4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: "rzp_test_tVfWajqfyKu6PG",
    key_secret: "lx418x8rEjoHwF0Q9DYRF824",
});

app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = "INR";

    const options = {
        amount: amount * 100,
        currency,
        receipt: v4(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(2012);
