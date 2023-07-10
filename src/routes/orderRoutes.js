const express = require("express");
const razorpayInstance = require("../controllers/razorpayController");

const router = express.Router();

router.get("/createOrder", (req, res) => {
  try {
    const { amount, currency } = req.query; // Retrieve amount and currency from the query parameters

    const options = {
      amount: Number(amount),
      currency: currency || "INR", // Use the provided currency or default to "INR"
      receipt: "receipt#1",
      payment_capture: 0, // 1 for automatic capture // 0 for manual capture
    };

    razorpayInstance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: "Something Went Wrong",
        });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

module.exports = router;
