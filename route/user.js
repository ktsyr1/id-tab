const express = require("express");
const router = express.Router();
const c_user = require("../controller/user");
// users
router.get("/signup", c_user.getsignup);
router.post("/signup", c_user.postSignup);


router.get("/login", c_user.getlogin); 
// router.post("/login", c_user.postlogin); 

module.exports = router;
