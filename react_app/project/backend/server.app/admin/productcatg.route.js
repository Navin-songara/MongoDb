// const express = require('express');
// const app = express();
// const productRoute = express.Router();
// const ProductCat = require('./productcatg.model');
// const cors = require("cors");
// app.use(cors())

// productRoute.route('/addproduct/:pcatid/:pcatname').post((req, res) => {
//     let productCat = new ProductCat({ pcatid: req.params.pcatid, pcatname: req.params.pcatname });
//     productCat.save().then((savedProductCat) => {
//             res.send(savedProductCat);
//         }).catch((err) => {
//             console.error("Error adding product category:", err);
//             res.status(500).send(err);
//         });
// });

// // Show all product categories
// productRoute.route('/showproductcat').get((req, res) => {
//     ProductCat.find()
//         .then((productCategories) => {
//             res.send(Array.isArray(productCategories) ? productCategories : []); // ✅ Fix: Always return an array
//         })
//         .catch((err) => {
//             console.error("Error fetching categories:", err);
//             res.status(500).send([]); // ✅ Fix: Returns empty array instead of error string
//         });
// });

// module.exports = productRoute;

const express = require('express'); // Express framework import kiya
const app = express(); // Express application create kiya

const productRoute = express.Router(); // Router banaya jisme routes define honge

const ProductCat = require('./productcatg.model'); // ProductCatg model import kiya

const cors = require("cors"); // CORS module import kiya taaki cross-origin requests allow ho sake
app.use(cors()); // CORS middleware lagaya

// ================= Add Product Category =================
productRoute.route('/addproduct/:pcatid/:pcatname').post((req, res) => {
    // URL parameters se data leke ek naya product category object banaya
    let productCat = new ProductCat({ 
        pcatid: req.params.pcatid, 
        pcatname: req.params.pcatname 
    });

    // Us object ko database me save kiya
    productCat.save()
        .then((savedProductCat) => {
            res.send(savedProductCat); // Successfully save hone par data return kiya
        })
        .catch((err) => {
            console.error("Error adding product category:", err); // Console me error log kiya
            res.status(500).send(err); // Client ko error return kiya
        });
});

// ================= Show All Product Categories =================
productRoute.route('/showproductcat').get((req, res) => {
    ProductCat.find() // Sare product categories fetch kiye
        .then((productCategories) => {
            // Agar result array hai to return karo, warna empty array bhejo
            res.send(Array.isArray(productCategories) ? productCategories : []);
        })
        .catch((err) => {
            console.error("Error fetching categories:", err); // Error console me print kiya
            res.status(500).send([]); // Agar error aaye to empty array bhejo
        });
});

module.exports = productRoute; 
// Is route module ko export kiya gaya hai taaki server ya app me import karke use kar sake
