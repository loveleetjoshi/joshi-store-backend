require('dotenv').config(); // Load environment variables from .env file

const config = {
  razorPayKeyID: process.env.RAZORPAY_KEY_ID,
  razorPayKeySecret: process.env.RAZORPAY_KEY_SECRET,
};

module.exports = config;
