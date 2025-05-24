// const express = require('express');
// const venderRoute = express.Router();
// const bodyParser = require('body-parser');
// const Vender = require('./vender.model');
// var fs = require('fs/promises');
// const multer = require('multer');


// // Vender Registration 
// venderRoute.route("/register")
//     .post((req, res) => {
//         var vender = new Vender(req.body);
//         vender.save()
//             .then((vender) => {
//                 if (vender != null) {
//                     res.send("Registration Successful");
//                 } else {
//                     res.send("Registration Failed");
//                 }
//             }).catch((error) => {
//                 res.status(400).send("Registration Failed");
//             });
//     })

// // Vender Login (Fixed query typo)
// venderRoute.route("/login")
//     .post((req, res) => {
//         let id = req.body.vuid;
//         let pass = req.body.vupass;
//         console.log(`userId : ${id} password: ${pass}`);
//         Vender.findOne({ $and: [{ "VUserId": id }, { "VUserPass": pass }] })  // Removed colon typo
//             .then((vender) => {
//                 if (vender) {
//                     res.send(vender);  // Send vendor data on success
//                 } else {
//                     res.status(400).send("Invalid ID/Password");
//                 }
//             }).catch((err) => {
//                 res.status(500).send("Something went wrong");
//             });
//     })

// // Get Images
// venderRoute.route('/getimage/:vpicname')
//     .get((req, res) => {
//         res.sendFile("C:/Users/PC/OneDrive/Desktop/PROGRAMING/React.Js/ReactDemo14/backend/server/vender/venderimages/" + req.params.vpicname);
//     });

// // Image Save (Multer)
// const st = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'C:/Users/PC/OneDrive/Desktop/PROGRAMING/React.Js/ReactDemo14/backend/server/vender/venderimages')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     },
// })
// const upload = multer({ storage: st });

// venderRoute.post('/savevenderimage', upload.single('file'), (req, res) => {
//     res.json({})
// })

// // Get Vender Count
// venderRoute.route("/getvendercount")
//     .get((req, res) => {
//         Vender.find()
//             .then((vender) => {
//                 res.send(vender);
//             }).catch((err) => {
//                 res.send("Something Went Wrong");
//             });
//     })

// // Enable/Disable Vender
// venderRoute.route('/vendermanage/:vid/:status')
//     .put((req, res) => {
//         Vender.updateOne({ "Vid": req.params.vid }, { "Status": req.params.status })
//             .then((vender) => {
//                 res.send("Vender Status Updated Successfully");
//             }).catch((err) => {
//                 res.send(err);
//             });
//     });

// module.exports = venderRoute;


const express = require('express'); // Express module ko import kiya
const venderRoute = express.Router(); // Router banaya vender ke liye
const bodyParser = require('body-parser'); // Body parsing middleware
const Vender = require('./vender.model'); // Vender model ko import kiya
var fs = require('fs/promises'); // File system promises API
const multer = require('multer'); // Multer file upload middleware

// ================= Vender Registration ===================
venderRoute.route("/register")
    .post((req, res) => {
        var vender = new Vender(req.body); // req.body se data le kar naya object banaya
        vender.save() // MongoDB me save kiya
            .then((vender) => {
                if (vender != null) {
                    res.send("Registration Successful"); // Success response
                } else {
                    res.send("Registration Failed"); // Null aaya toh failure
                }
            }).catch((error) => {
                res.status(400).send("Registration Failed"); // Error handling
            });
    })

// ================= Vender Login ===================
venderRoute.route("/login")
    .post((req, res) => {
        let id = req.body.vuid;     // user ID from frontend
        let pass = req.body.vupass; // user password
        console.log(`userId : ${id} password: ${pass}`); // Debugging ke liye log
        Vender.findOne({ $and: [{ "VUserId": id }, { "VUserPass": pass }] }) // MongoDB query
            .then((vender) => {
                if (vender) {
                    res.send(vender); // Agar data mila toh bhej do
                } else {
                    res.status(400).send("Invalid ID/Password"); // Agar nahi mila
                }
            }).catch((err) => {
                res.status(500).send("Something went wrong"); // Server error
            });
    })

// ================= Get Image ===================
venderRoute.route('/getimage/:vpicname')
    .get((req, res) => {
        // Static image path se image bhejna
        res.sendFile("C:/Users/PC/OneDrive/Desktop/PROGRAMING/React.Js/ReactDemo14/backend/server/vender/venderimages/" + req.params.vpicname);
    });

// ================= Multer Setup for File Upload ===================
const st = multer.diskStorage({
    destination: (req, file, cb) => {
        // File kaha save hoga
        cb(null, 'C:/Users/PC/OneDrive/Desktop/PROGRAMING/React.Js/ReactDemo14/backend/server/vender/venderimages')
    },
    filename: (req, file, cb) => {
        // File ka naam kya hoga
        cb(null, file.originalname)
    },
})
const upload = multer({ storage: st }); // Multer ko setup kiya

// ================= Save Image API ===================
venderRoute.post('/savevenderimage', upload.single('file'), (req, res) => {
    // Image upload hone ke baad JSON empty response
    res.json({})
})

// ================= Get Vender Count ===================
venderRoute.route("/getvendercount")
    .get((req, res) => {
        Vender.find() // Sare vendors fetch karo
            .then((vender) => {
                res.send(vender); // List bhej do
            }).catch((err) => {
                res.send("Something Went Wrong"); // Agar kuch galat hua
            });
    })

// ================= Enable/Disable Vender ===================
venderRoute.route('/vendermanage/:vid/:status')
    .put((req, res) => {
        // Vid ke basis par status update karo
        Vender.updateOne({ "Vid": req.params.vid }, { "Status": req.params.status })
            .then((vender) => {
                res.send("Vender Status Updated Successfully"); // Success response
            }).catch((err) => {
                res.send(err); // Error bhej do
            });
    });

module.exports = venderRoute; // Router ko export kiya taaki app me use ho sake
