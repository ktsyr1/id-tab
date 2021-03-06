const passport = require('passport')
const localStragey = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs')

passport.use(new localStragey({
    usernameField: "email",
    passwordField: "password"
}, (username, password, done) =>{

    let query = {email : username} 
    User.findOne(query, (err, user) =>{
        if (err) { return done(err) }
        if (!user) {
            return done(null, false, {type:"errorlogin", message: "no user found."})
        }
        bcrypt.compare(password, user.password, (err,isMatch) =>{
            if(err) {
                return done(err)
            }
            if (!isMatch) {
                return done(null, false, {type:"errorlogin", message: "wrong password."})
            } else {
                return done(null, user)
            }
            
        })
    })
}))

passport.serializeUser((user, done) =>{
    return done(null, user.id)
})

passport.deserializeUser((id,done) =>{
    User.findById(id, (err,user) =>{
        return done(err,user)
    })
})