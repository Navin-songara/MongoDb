const mongooose = require("mongoose");
const Schema = mongoose.Schema;
let PaymentDetails = new Schema(
  {
    orderCreationId: { type: String },
    razorpayPaymentId: { type: String },
    razorpayOrderId: { type: String },
    razorpaySignature: { type: String },
    cid: { type: Number },
    billid: { type: Number },
    amount: { type: Number },
  },
  {
    collation: "PaymentDetails",
  }
);
module.exports = mongoose.model("PaymentDetails", PaymentDetails);
