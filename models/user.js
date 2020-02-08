const mongoose =require("mongoose")
// const bcrypt = require("bcrypt")
const userSchema = mongoose.Schema({
    email:{type:String , required :true},
    password:{type:String , required :true}
})
// userSchema.methods.hashPassword =(password)=>{
//     return  bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
// }
const User = mongoose.model('User', userSchema, 'user');
module.exports = User; 