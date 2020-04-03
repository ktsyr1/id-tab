const passport =require("passport"),
    local = require("passport-local").Strategy,
    User =require("../models/user");
passport.use("local.signup",new local({},(req,username,password,done)=>{
    
}))