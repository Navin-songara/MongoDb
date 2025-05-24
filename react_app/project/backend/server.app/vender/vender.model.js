// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let Vender = new Schema({
//     VUserId: { type: String },
//     VUserPass: { type: String },
//     VenderName: { type: String },
//     VAddress: { type: String },
//     VContact: { type: Number },
//     VEmail: { type: String },
//     VPicName: { type: String },
//     Vid: { type: Number },
//     Status: { type: String }
// },
//     {
//         collection: "Vender"
//     });

// module.exports = mongoose.model("Vender", Vender);


const mongoose = require('mongoose'); // Mongoose module import kar rahe hain
const Schema = mongoose.Schema;       // Schema class ko extract kar rahe hain

// Naya schema banaya gaya hai "Vender" ke liye
let Vender = new Schema({
    VUserId: { type: String },     // Vender ka user ID string type hoga
    VUserPass: { type: String },   // Vender ka password
    VenderName: { type: String },  // Vender ka naam
    VAddress: { type: String },    // Vender ka address
    VContact: { type: Number },    // Vender ka contact number (number type)
    VEmail: { type: String },      // Vender ka email address
    VPicName: { type: String },    // Vender ke photo ka naam
    Vid: { type: Number },         // Vender ID (number type)
    Status: { type: String }       // Status field (e.g. active/inactive)
},
{
    collection: "Vender" // Is schema ka collection name "Vender" hoga
});

// Model ko export kar rahe hain taaki dusre files me use ho sake
module.exports = mongoose.model("Vender", Vender); 
