const express =require('express');
const userRoute=express.Router();
const multer=require("multer");
var user=require("./user.model");
2
//registration
userRoute.route
('./register').
post((req,res)=>{
    var user=new UserActivation(req.body);
    user.save().then(user=>{
        res.send("Registration Successfully Done");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

//login
userRoute.route
('./login').post((req,res)=>{
    user.findOne({$and:[{"uid":req.body.uid},{"upass":req.body.upass}]}).then(user=>{
        res.send(user);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

//code save image to server
const st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'C:/Users/Aman nema/OneDrive/Desktop/nodejs/React JS/LoginRegistration/Backend/Server-app/Userimages')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
});
const upload=multer({storage:st}); //store
userRoute.route('/uploadimages').post(upload.single('file'),
(req,res)=>{
    console.log("file fun called");
    res.send("File uploaded successfully");
    res.end();
});

//code for downloading
userRoute.route('getimage/:picname').get((req,res)=>{
    res.sendFile("C:/Users/Aman nema/OneDrive/Desktop/nodejs/React JS/LoginRegistration/Backend/Server-app/Userimages"+req.params.picname);
});
module.exports=userRoute;