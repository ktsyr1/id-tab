const express = require("express");
const router = express.Router();
const c_user = require("../controller/user");
const passport = require('passport')

require('../config/passport')
// users
router.get("/signup", c_user.getsignup);
router.post("/signup", c_user.postSignup);


router.get("/login", c_user.getlogin); 
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true 
    })
);

module.exports = router;
