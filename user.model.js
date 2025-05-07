var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var User=new Schema({
    uid:{type:String},
    upass:{type:String},
    fullname:{type:String},
    picname:{type:String},
},
{
    collection:'user'
}

);
module.export=mongoose.model('user',User);