const mongoose =require("mongoose")
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
    email:{type:String , required :true},
    password:{type:String , required :true},
    powers:{type:String , default:"Guest"} // Guest , editor , Manager , root
})

userSchema.methods.hashPassword =(password)=>{
    return  bcrypt.hashSync(password,bcrypt.genSaltSync(5))
}
userSchema.methods.comparePassword =(password,hash)=>{
    return  bcrypt.compareSync(password,hash)
}
const User = mongoose.model('User', userSchema, 'user');
module.exports = User; 