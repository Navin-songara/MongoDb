const express = require("express");
const PaymentDetailsRoute = express.Router();
let PaymentDetails = require("./paymentdetails.model");

// save payment details
PaymentDetailsRoute.route("/paymentdetailssave").post((req, res) => {
  let paymentdetails = new PaymentDetails(req.body);

  paymentdetails
    .save()
    .then((bill) => {
      res.send("Payment Details Saved Successfully :)");
    })
    .catch((err) => {
      res.send("Unable to Save Payment Details", err);
    });
});

// get payment details
PaymentDetailsRoute.route("/showpaymentdetails").get((req, res) => {
  PaymentDetails.find()
    .then((details) => {
      res.send(details);
    })
    .catch((err) => {
      res.send("Unable to Get Payment Details ", err);
    });
});

// get payment details by bill id
PaymentDetailsRoute.route("/showpaymentdetailsbyid/:billid").get((req, res) => {
  PaymentDetails.findOne({ billid: req.params.billid })
    .then((details) => {
      res.send(details);
    })
    .catch((err) => {
      res.send("Unable to Get Payment Details By Bill ID", err);
    });
});

module.exports = PaymentDetailsRoute;
