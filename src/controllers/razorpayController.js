const config = require('../../config');

const Razorpay = require("razorpay");
const razorpayInstance = new Razorpay({
    key_id: config.razorPayKeyID,
    key_secret: config.razorPayKeySecret,
});

module.exports = razorpayInstance;