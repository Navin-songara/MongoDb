let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Bill = new Schema({
    billid: { type: Number },
    billdate: { type: String },
    cid: { type: Number },
    pid: { type: Number },
},
    {
        collection: 'Bill'
    }
);
module.exports = mongoose.model('Bill', Bill);
// This code defines a Mongoose schema for a "Bill" collection in a MongoDB database.   