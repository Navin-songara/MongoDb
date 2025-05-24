// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const PORT = 9191;
// const cors = require("cors");
// const mongoose = require("mongoose");
// const config = require("./DB");
// const stateRoute = require("./admin/state.route");
// // const cityRoute = require("./admin/city.route");
// const productCatgRoute = require("./admin/productcatg.route");
// const VenderRoute = require('./vender/vender.route');
// // const venderRoute = require("./vender/vender.route");
// // const customerRoute = require('./customer/customer.route');

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use("/state", stateRoute);
// // app.use("/city", cityRoute);
// app.use("/productcatg", productCatgRoute);
// // app.use("/vender", venderRoute);
// // app.use("/customer", customerRoute);

// mongoose.connect(config.URL,
//   {useNewUrlParser:true}
// ).then(
//   ()=>{console.log('Database is connected'+config.URL)},
//   err=>{console.log('Can not cannot to the database'+err)}
// );

// app.listen(PORT,function(){
//   console.log('Server is running on Port:',PORT);
// });
  
// //   .connect(config.URL, { useNewUrlParser: true })
// //   .then(() => {
// //     console.log(`Database is connected {config.URL}`);
// //   })
// //   .catch((err) => {
// //     console.log(`Can not connect to the data ${err}`);
// //   });

// // app.listen(PORT, () => {
// //   console.log(`Server is Running ${PORT}`);
// // });



// Required modules ko import kar rahe hain
const express = require("express");
const app = express(); // Express ka instance banaya
const bodyParser = require("body-parser"); // Request body ko parse karne ke liye
const PORT = 9191; // Server ka port number define kiya
const cors = require("cors"); // Cross-Origin Requests ko allow karne ke liye
const mongoose = require("mongoose"); // MongoDB se connect hone ke liye
const config = require("./DB"); // DB config file jisme MongoDB ka URL hai
const stateRoute = require("./admin/state.route"); // State ke route ko import kiya
// const cityRoute = require("./admin/city.route"); // (Abhi comment me hai, agar chahiye toh uncomment karein)
const productCatgRoute = require("./admin/productcatg.route"); // Product category ke routes
const VenderRoute = require('./vender/vender.route'); // Vender ke routes
// const venderRoute = require("./vender/vender.route"); // Duplicate line, isliye comment
// const customerRoute = require('./customer/customer.route'); // Customer route (abhi comment me hai)

// Middlewares
app.use(cors()); // Sabhi domains ke request allow honge
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded data ko parse karega
app.use(bodyParser.json()); // JSON data ko parse karega

// Route mount kar rahe hain base path ke sath
app.use("/state", stateRoute);
// app.use("/city", cityRoute); // Agar city routes enable karne hain toh uncomment karein
app.use("/productcatg", productCatgRoute);
// app.use("/vender", venderRoute); // Yeh duplicate hai, neeche wala VenderRoute hi sahi hai
// app.use("/customer", customerRoute); // Customer ke routes agar chahiye toh uncomment karein

// MongoDB connection setup
mongoose.connect(config.URL, { useNewUrlParser: true })
  .then(
    () => { console.log('Database is connected ' + config.URL); }, // Connection success message
    err => { console.log('Can not connect to the database ' + err); } // Connection fail message
  );

// Server ko listen karne ke liye
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT); // Server start hone par message show karega
});
