const express=require('express');
const dotenv =require('dotenv');
const jwt =require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors =require('cors');
const app =express();

//middleware
app.use(bodyParser.json());
app.use(cors()); //enable CORS for all routes 
//set up global configuration access
dotenv.config();
let PORT=process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log("Server is up and running on Port"+PORT);
});

//main code here//
//generating JWT
app.post("/user/generateToken",(req,res)=>{
    //validate user here
    //Then generate JWT token
    let jwtSecretKey=process.env.JWT_SECRET_KEY;
    let data={
        time: Date(),
        userId:12,
    }
    const token=jwt.sign(data,jwtSecretKey);
    //res.send(token);
    console.log("Generated JWT:-"+token)
    res.json({token});
});

app.get('/user/validateToken',authenticateToken,(req,res)=>{
    res.json({message:'Token Authenticated'});
});

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];
    console.log("Token From Client :-"+token)
    if(token==null){
        return res.sendStatus(401);
    }
    var secretKey=process.env.JWT_SECRET_KEY;
    jwt.verify(token,secretKey,(err,user)=>{
        if(err){
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}

// npm install env esa kuch h pata kr