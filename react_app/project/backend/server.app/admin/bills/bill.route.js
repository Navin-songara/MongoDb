const express = require("express");
const billroute = express.Router();
const Bill = require("./bill.model");

// Save Bill
billroute.route("/billsave").post((req, res) => {
  let bill = new Bill(req.body);

  bill
    .save()
    .then((bill) => {
      res.send({ bill: "Bill Added Successfully :)" });
    })
    .catch((err) => {
      res.send(err);
    });
});

// show all bill by customer id
billroute
  .route("/billshow/:cid")
  .get((req, res) => {
    Bill.find({ cid: req.params.cid }).then((bill) => {
      res.send(bill);
    });
  })
  .catch((err) => {
    res.send(err);
  });

billroute.route("/billshowbillids/:cid").get((req, res) => {
  Bill.distinct("billid", { cid: req.params.cid })
    .then((bill) => {
      res.send(bill);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get id of last  Entered  bill to genrate Id for next bill

billroute.route("/getbillid").get((req, res) => {
  Bill.find()
    .sort({ billid: -1 })
    .limit(1)
    .then((bill) => {
      console.log(bill);
      res.send(bill);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get bill details by billid 
billroute.route('/showbillbyid/:billid').get((req, res) => {
    Bill.find({ "billid": req.params.billid })
        .then(bill => {
            res.send(bill);
        }).catch(err => {
            res.send(err);
        });
});

// show all bill 
billroute.route('/billshow').get((req, res) => {
    Bill.find()
        .then(bill => {
            res.send(bill);
        }).catch(err => {
            res.send(err);
        });
});

module.exports = billroute;