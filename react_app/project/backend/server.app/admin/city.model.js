// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// var City = new Schema({
//     ctid: { type: Number },
//     ctname: { type: String },
//     stid: { type: Number },
//     stname: { type: String },
//     status:{type:Number}
// },
//     {
//         collection: 'city'
//     }
// ); 
// module.exports = mongoose.model('City', City);

var mongoose = require('mongoose'); 
// Mongoose ek library hai jo MongoDB ke sath kaam karne ke liye use hoti hai

const Schema = mongoose.Schema; 
// Schema ek class hai jo data ka structure define karne ke kaam aati hai

var City = new Schema(
  {
    ctid: { type: Number },     // ctid field number type ka hai (City ID)
    ctname: { type: String },   // ctname field string type ka hai (City Name)
    stid: { type: Number },     // stid field number type ka hai (State ID)
    stname: { type: String },   // stname field string type ka hai (State Name)
    status: { type: Number }    // status field number type ka hai (active/inactive status ke liye)
  },
  {
    collection: 'city'          // Is schema ka data 'city' collection me store hoga
  }
);

module.exports = mongoose.model('City', City); 
// Schema ko 'City' model ke roop me export kiya gaya hai taaki use kisi bhi file me import karke use kiya ja sake
