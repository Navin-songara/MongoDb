// book model file is used to define schema of database , here we can define field or struture  of table or collection
var mongoose = require("mongoose");
// mongoose
var Schema = mongoose.Schema;
var Book = new Schema({
    BId: { type: Number },
    BName: { type: String },
    BPrice: { type: Number },
}, { collection: 'Book' });
module.exports = mongoose.model('Book', Book);
