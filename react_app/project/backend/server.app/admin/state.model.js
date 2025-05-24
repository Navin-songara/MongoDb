// // this file is used to define schema / structure of database
// var mongoose = require("mongoose");
// //used to connect expresss application to mongobd , it provide schema named class to define table structure.

// const Schema = mongoose.Schema;
// var State = new Schema(
//   {
//     stid: { type: Number },
//     stname: { type: String },
//     status: { type: Number },
//   },
//   {
//     collection: "state",
//     //collection means table , it will create state named collection or table in mongodb database
//   }
// );
// module.exports = mongoose.model("State", State);
// Ye file MongoDB ke liye schema / structure define karne ke liye use hoti hai
var mongoose = require("mongoose");
// Mongoose ek library hai jo Express app ko MongoDB se connect karti hai.
// Ye 'Schema' naam ka class provide karti hai jisse table (collection) ka structure define kiya jata hai.

const Schema = mongoose.Schema; 
// Schema ek mongoose ka object hai jisse data ke types aur fields define hote hain

var State = new Schema(
  {
    stid: { type: Number },      // stid field number type ka hai (State ID)
    stname: { type: String },    // stname field string type ka hai (State Name)
    status: { type: Number },    // status field number type ka hai (1 = active, 0 = inactive)
  },
  {
    collection: "state" 
    // 'state' naam ki collection banegi MongoDB me
    // Collection ka matlab hota hai table jisme ye records store honge
  }
);

// 'State' model ko export kiya gaya hai jisse dusre files me use kiya ja sake
module.exports = mongoose.model("State", State);
