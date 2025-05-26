// let mongoose = require('mongoose');
// // mongoose librery used to providemongodb schema class to manage structure of data for database.

// const Schema = mongoose.Schema;
// // Schema named class provide information about data type;
// // productcatg is object and used fileds / coloums of database with datatypes.

// let ProductCatg = new Schema({
//     pcatid: { type: Number },
//     pcatname: { type: String }
// },
//     {
//         collection: "productCatg"
//     }
// );
// module.exports = mongoose.model('ProductCatg', ProductCatg);

let mongoose = require('mongoose');
// Mongoose ek library hai jo MongoDB ke saath kaam karne ke liye use hoti hai.
// Ye database ke structure ko manage karne ke liye schema provide karti hai.

const Schema = mongoose.Schema;
// Schema ek class hai jiske through hum data ke type aur structure define karte hain.

let ProductCatg = new Schema(
  {
    pcatid: { type: Number },    // pcatid field number type ka hai (Product Category ID)
    pcatname: { type: String }   // pcatname field string type ka hai (Product Category Name)
  },
  {
    collection: "productCatg"    // Ye schema 'productCatg' naam ki collection me store hoga
  }
);

module.exports = mongoose.model('ProductCatg', ProductCatg);
// Is schema ko 'ProductCatg' model ke form me export kiya gaya hai
// Taaki is model ko kisi bhi file me import karke use kiya ja sake (CRUD operations ke liye)
