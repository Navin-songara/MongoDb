//student.route.js : used to define CRUD operation.

const express = require('express');
const bookRoute = express.Router();
//Router 
var Book = require('./book.model');

//save
bookRoute.route('/save').post((req, res) => {
    var book = new Book(req.body);
    book.save().then(book => {
        res.send('Data Saved');
        res.end();
    }).catch((err) => {
        console.log("Error: ", err);
        res.send(err, errmsg);
        res.end();
    });
});

//showAll
bookRoute.route('/show').get((req, res) => {
    Book.find().then((book) => {
        res.send(book);
        res.end();
    }).catch((err) => {
        console.log("Error : ", err);
        res.send(err);
        res.end();
    })
})

//Search
bookRoute.route('/search/:BId').get((req, res) => {
    Book.findOne({ "BId":req.params.BId }).then((book) => {
        res.send(book);
        res.end();
    }).catch((err) => {
        console.log("Error")
        res.send(err);
        res.end();
    })
})

//Update
bookRoute.route('/edit').put((req, res) => {
    Book.updateOne({ "BId": req.body.BId }, { "BName": req.body.BName, "BPrice": req.body.BPrice }).then((book) => {
        res.send("Data Updated ");
        res.end();
    }).catch((err) => {
        res.send(err)
        res.end();
    });
});

//delete
bookRoute.route('/remove/:BId').delete((req, res) => {
    Book.deleteOne({ "BId": req.params.BId }).then((book) => {
        res.send("Data Deleted");
        res.end();
    }).catch((err) => {
        res.send(err)
        res.end();
    });
});

module.exports = bookRoute;
