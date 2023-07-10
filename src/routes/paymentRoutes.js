const express = require("express");
const crypto = require("crypto");
const config = require("../../config");

const router = express.Router();

router.post("/verifyOrder", async (req, res) => {
  try {
    // STEP 7: Receive Payment Data
    const { orderId, paymentId } = req.body;
    const razorpay_signature = req.headers["x-razorpay-signature"];

    // Pass yours key_secret here
    const key_secret = config.razorPayKeySecret;

    // STEP 8: Verification & Send Response to User

    // Creating hmac object
    let hmac = crypto.createHmac("sha256", key_secret);

    // Passing the data to be hashed
    hmac.update(orderId + "|" + paymentId);

    // Creating the hmac in the required format
    const generated_signature = hmac.digest("hex");

    if (razorpay_signature === generated_signature) {
      return res
        .status(200)
        .json({ success: true, message: "Payment has been verified" });
    } else
      return res
        .status(500)
        .json({ success: false, message: "Payment verification failed" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
});

module.exports = router;
