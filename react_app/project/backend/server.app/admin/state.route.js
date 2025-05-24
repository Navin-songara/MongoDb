// // this file is used to define operation like insert , update , delete , serach , show etc;
// const express = require('express');
// const stateRoute = express.Router();
// //router is used to define route of web page , if we use routing in web page , if we use routing in web api it make searching easy and fast , it create index for each for each web page so searching will be fast of particullar web page .

// var State = require('./state.model') // it connect model

// // function to save state
// stateRoute.route('/save').post((req, res) => {
//         var state = new State(req.body);
//         state.save()
//             .then(state => {
//                 res.send("State Saved");
//                 res.end();
//             }).catch(err => {
//                 res.send(err);
//                 res.end();
//             });
//     });

// //function to search state
// stateRoute.route('/search/:stid').get((req, res) => {
//     State.findOne({ "stid": req.params.stid })
//         .then(state => {
//             res.send(state);
//             res.end();
//         }).catch(err => {
//             res.send(err);
//             res.end();
//         });
// });

// // function to update state
// stateRoute.route('/update').put((req, res) => {
//     State.updateOne({ 'stid': req.body.stid }, { 'stid': req.body.stid, 'stname': req.body.stname, 'status': req.body.status })
//         .then(state => {
//             res.send('State Updated Successfully');
//             res.end();
//         }).catch((err) => {
//             res.send(err);
//             res.end();
//         });
// });

// //delete enable or disable
// stateRoute.route('/delete/:stid').delete((req, res) => {
//     State.updateOne({ 'stid': req.params.stid }, { 'status': 0 })
//         .then((state) => {
//             res.send('State Disabled Successfully');
//             res.end();
//         }).catch((err) => {
//             res.send(err);
//             res.end();
//         });
// });

// //show all used to get all data from mongodb
// stateRoute.route('/show').get((req, res) => {
//     State.find({ 'status': 1 })
//         .then(state => {
//             res.send(state);
//             res.end();
//         }).catch((err) => {
//             res.send(err);
//             res.end();
//         });
// });

// //search state by name to avoid duplicate entry
// stateRoute.route('/searchbyname/:stname').get((req, res) => {
//     State.findOne({ 'stname': req.params.stname })
//         .then((state) => {
//             res.send(state);
//             res.end();
//         }).catch((err) => {
//             res.send(err);
//             res.end();
//         });
// });

// module.exports = stateRoute;

// Ye file operations define karne ke liye use hoti hai jaise insert, update, delete, search, show etc.

const express = require('express');
const stateRoute = express.Router(); 
// Router ka use routes define karne ke liye hota hai
// Web API me routing searching ko easy aur fast bana deti hai, har route ka index ban jata hai jo fast access provide karta hai.

var State = require('./state.model'); 
// State model ko import kiya gaya hai jisse database ke structure se connection ban sake

// ================= Save State =================
stateRoute.route('/save').post((req, res) => {
    var state = new State(req.body); // Request body se data leke new state object banaya
    state.save()
        .then(state => {
            res.send("State Saved"); // Agar save ho gaya to success message bhejna
            res.end(); // Response end kar diya
        }).catch(err => {
            res.send(err); // Agar error aaye to error bhejna
            res.end();
        });
});

// ================= Search State by ID =================
stateRoute.route('/search/:stid').get((req, res) => {
    State.findOne({ "stid": req.params.stid }) // stid ke base par search karna
        .then(state => {
            res.send(state);
            res.end();
        }).catch(err => {
            res.send(err);
            res.end();
        });
});

// ================= Update State =================
stateRoute.route('/update').put((req, res) => {
    State.updateOne(
        { 'stid': req.body.stid }, // Matching condition
        { 
            'stid': req.body.stid, 
            'stname': req.body.stname, 
            'status': req.body.status 
        } // Naye values update karna
    )
    .then(state => {
        res.send('State Updated Successfully'); // Success message
        res.end();
    }).catch((err) => {
        res.send(err); // Error message
        res.end();
    });
});

// ================= Soft Delete (Disable State) =================
stateRoute.route('/delete/:stid').delete((req, res) => {
    State.updateOne(
        { 'stid': req.params.stid }, // stid match karna
        { 'status': 0 } // Status ko 0 karna matlab disable karna
    )
    .then((state) => {
        res.send('State Disabled Successfully');
        res.end();
    }).catch((err) => {
        res.send(err);
        res.end();
    });
});

// ================= Show All Active States =================
stateRoute.route('/show').get((req, res) => {
    State.find({ 'status': 1 }) // Sirf active states dikhana
        .then(state => {
            res.send(state);
            res.end();
        }).catch((err) => {
            res.send(err);
            res.end();
        });
});

// ================= Search State by Name =================
stateRoute.route('/searchbyname/:stname').get((req, res) => {
    State.findOne({ 'stname': req.params.stname }) // stname ke base par search
        .then((state) => {
            res.send(state);
            res.end();
        }).catch((err) => {
            res.send(err);
            res.end();
        });
});

module.exports = stateRoute; 
// Is route file ko export kiya gaya taaki app.js ya server.js me import karke use kar sake
