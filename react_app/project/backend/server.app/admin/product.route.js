const express = require('express');
const productRoute = express.Router();
let Product = require('./product.model');
const multer = require('multer');

//save Product
productRoute.route
('/saveproduct').
post((req, res)=>{
    let product = new Product(req,body);
    console.log(product =>{
        res.send('product added successfully');
        res.end();
    }).catch(err =>{
        res.send(err);
        res.end();
    });
});
//get product all
productRoute.route
('/showproduct').get(function(req,res){
    Product.find()
    .then(product =>{
        console.log(product);
        res.send(product);
        res.end();
    })
    .catch(err=>{
        res.status(400).send
        ("Data not found something went wrong");
    });
});
//get product all
productRoute.route
('showproductstatus/:pid').get(function(req,res){
    Product.findOne({"pid":req.params.pid})
    .then(product =>{
        console.log(product);
        res.send(product);
        res.end();
    })
    .catch(err =>{
        res.status(400).send
        ("Data not found something went wrong");
    });
});
//get product count for id
productRoute.route
('/getmaxpid').get(function (req, res){
    Product.find()
    .then(product =>{
        console.log(product);
        res.send(product);
        res.end();
    })
    .catch(err =>{
        res.status(400).send
        ("Data not found something went wrong");
    });
    //save product Image
    const stv = multer.diskStorage({
        destination: (req,file, cb) =>{
            cb(null,"/home/administrator/Desktop/MyData/Shopping-Cart-With-Redux/server-app/product/productimages/")
        },
        filename: (req, file,cb) =>{
            cb(null, file.originalname)
        },
    })
    const uploadv = multer({ storage:stv});
    productRoute.post{'/saveproductimage',uploadv.single('file'),
        (req, res) =>{
            res.send("Upload Success");
            res.end();
        
    }
})