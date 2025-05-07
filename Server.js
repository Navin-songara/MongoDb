const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=9299;
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./DB');
const userRoute=require('./user.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('./user',userRoute);
mongoose.connect(config.URL).then(
    ()=>{console.log('Database is connected'+config.URL)},
    err=>{console.log('Can not  connect to the database'+err)}
);
app.listen(PORT,function(){
    console.log('Server is running on Port:',PORT);
});