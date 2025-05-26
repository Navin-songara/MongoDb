// // const express = require("express");
// // const cityRoute = express.Router();
// // var City = require("./city.model");


// // //save city
// // cityRoute.route("/save").post((req, res) => {
// //   let city = new City(req.body);
// //   city.save()
// //     .then((city) => {
// //       res.send("City Saved");
// //     })
// //     .catch((error) => {
// //       res.send(error);
// //     });
// // });

// // // Search City
// // cityRoute.route("/search/:ctid").get((req, res) => {
// //   City.findOne({ ctid: req.params.ctid })
// //     .then((city) => {
// //       res.send(city);
// //     })
// //     .catch((error) => {
// //       res.send(error);
// //     });
// // });


// // cityRoute.route("/update").put((req, res) => {
// //   City.updateOne(
// //     { ctid: req.body.ctid },
// //     {
// //       ctid: req.body.ctid,
// //       ctname: req.body.ctname,
// //       stid: req.body.stid,
// //       stname: req.body.stname,
// //       status: req.body.status
// //     }
// //   )
// //     .then((city) => {
// //       res.send("City Updated Successfully");
// //     })
// //     .catch((err) => {
// //       res.send(err);
// //     });
// // });

// // // Delete Enable and Disable Route
// // cityRoute.route("/delete/:ctid").delete((req, res) => {
// //   City.updateOne(
// //     {
// //       ctid: req.params.ctid,
// //     },
// //     { status: 0 }
// //   ).then((city) => {
// //     res.send("City Disabled Successfully");
// //   }).catch((err) => {
// //     res.send(err)
// //   });
// // });


// // cityRoute.route("/getall").get((req, res) => {
// //   City.find({ status: 1 })
// //     .then((city) => {
// //       res.send(city);
// //     }).catch((err) => {
// //       res.send(err);
// //     });
// // });

// // // Show All Cities 
// // cityRoute.route('/show').get((req, res) => {
// //   City.find({ status: 1 })
// //     .then((city) => {
// //       res.send(city);
// //     }).catch((err) => {
// //       res.send(err);
// //     });
// // });

// // // Search state by name to avoid duplicate entry.
// // cityRoute.route('/searchbyname/:ctname').get((req, res) => {
// //   City.findOne({ 'ctname': req.params.ctname })
// //     .then((city) => {
// //       res.send(city);
// //     }).catch((err) => {
// //       res.send(err);
// //     });
// // });

// // module.exports = cityRoute;


// const express = require("express");
// const cityRoute = express.Router();
// const City = require("./city.model");

// // Save City
// cityRoute.route("/save").post((req, res) => {
//   let city = new City(req.body);
//   city.save()
//     .then((city) => {
//       res.send("City Saved");
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// });

// // Search City by ctid
// cityRoute.route("/search/:ctid").get((req, res) => {
//   City.findOne({ ctid: req.params.ctid })
//     .then((city) => {
//       res.send(city);
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// });

// // Update City
// cityRoute.route("/update").put((req, res) => {
//   City.updateOne(
//     { ctid: req.body.ctid },
//     {
//       ctid: req.body.ctid,
//       ctname: req.body.ctname,
//       stid: req.body.stid,
//       stname: req.body.stname,
//       status: req.body.status
//     }
//   )
//     .then((city) => {
//       res.send("City Updated Successfully");
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // Disable City (Soft Delete)
// cityRoute.route("/delete/:ctid").delete((req, res) => {
//   City.updateOne(
//     { ctid: req.params.ctid },
//     { status: 0 }
//   )
//     .then((city) => {
//       res.send("City Disabled Successfully");
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // Get All Active Cities
// cityRoute.route("/getall").get((req, res) => {
//   City.find({ status: 1 })
//     .then((city) => {
//       res.send(city);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // Show All Active Cities (Same as /getall)
// cityRoute.route("/show").get((req, res) => {
//   City.find({ status: 1 })
//     .then((city) => {
//       res.send(city);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // Search City by Name to Prevent Duplicate Entry
// cityRoute.route("/searchbyname/:ctname").get((req, res) => {
//   City.findOne({ ctname: req.params.ctname })
//     .then((city) => {
//       res.send(city);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// module.exports = cityRoute;

const express = require("express"); 
// Express ek Node.js framework hai jo API banane me help karta hai

const cityRoute = express.Router(); 
// express.Router() ka use routes group karne ke liye hota hai

const City = require("./city.model"); 
// City model ko import kiya gaya hai jo mongoose schema ke base pe banaya gaya hai

// =================== Save City ===================
cityRoute.route("/save").post((req, res) => {
  let city = new City(req.body); // request body se naya city object banaya
  city.save() // city ko database me save kiya
    .then((city) => {
      res.send("City Saved"); // success message
    })
    .catch((error) => {
      res.send(error); // agar error aaye to error bhej diya
    });
});

// =================== Search City by ctid ===================
cityRoute.route("/search/:ctid").get((req, res) => {
  City.findOne({ ctid: req.params.ctid }) // ctid ke base pe city dhoondh rahe hain
    .then((city) => {
      res.send(city); // milne par city return kar rahe hain
    })
    .catch((error) => {
      res.send(error); // error handle kar rahe hain
    });
});

// =================== Update City ===================
cityRoute.route("/update").put((req, res) => {
  City.updateOne(
    { ctid: req.body.ctid }, // jisme ctid match kare usko update karo
    {
      ctid: req.body.ctid,
      ctname: req.body.ctname,
      stid: req.body.stid,
      stname: req.body.stname,
      status: req.body.status
    }
  )
    .then((city) => {
      res.send("City Updated Successfully"); // update successful message
    })
    .catch((err) => {
      res.send(err); // error message
    });
});

// =================== Disable City (Soft Delete) ===================
cityRoute.route("/delete/:ctid").delete((req, res) => {
  City.updateOne(
    { ctid: req.params.ctid }, // jis ctid ka record disable karna hai
    { status: 0 } // status 0 set karke record ko disable kiya
  )
    .then((city) => {
      res.send("City Disabled Successfully"); // success message
    })
    .catch((err) => {
      res.send(err); // error message
    });
});

// =================== Get All Active Cities ===================
cityRoute.route("/getall").get((req, res) => {
  City.find({ status: 1 }) // sirf active cities (status 1) fetch karo
    .then((city) => {
      res.send(city); // list bhejo
    })
    .catch((err) => {
      res.send(err); // error handle
    });
});

// =================== Show All Active Cities (Duplicate of /getall) ===================
cityRoute.route("/show").get((req, res) => {
  City.find({ status: 1 }) // active cities dikhani hai
    .then((city) => {
      res.send(city); // send result
    })
    .catch((err) => {
      res.send(err); // error bhejo
    });
});

// =================== Search City by Name (to avoid duplicate) ===================
cityRoute.route("/searchbyname/:ctname").get((req, res) => {
  City.findOne({ ctname: req.params.ctname }) // city name ke base pe search karo
    .then((city) => {
      res.send(city); // agar mil jaye to bhejo
    })
    .catch((err) => {
      res.send(err); // nahi to error bhejo
    });
});

module.exports = cityRoute; 
// Is route file ko export kiya gaya hai taaki app.js ya server.js me use kiya ja sake

