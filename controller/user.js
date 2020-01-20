const user = require("../models/user")
const {check , validationResult} = require("express-validator")

exports.getlogin = (req, res) => { 
  res.render("user/login", { title: " دخول تسجيل" });

};
// ===========================================
exports.getsignup = (req, res) => {   
  
    res.render("user/signup", { title: "تسجيل  " });  
};
exports.postSignup = [[
  check("email").not().isEmpty().withMessage("1111 "),
  check("email").isEmail().withMessage("22222"),
  check("password").not().isEmpty().withMessage("333"), 
  check("password").isLength({min : 5}).withMessage("44444"),
  check("rePassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    } 
    return true;
  })
  ],(req, res) => {  
  const error = validationResult(req)
  if(! error.isEmpty()){
console.log(error);

  }
  
  let newUser = new user({
    email :  req.body.email,
    password :  req.body.password
  })
  // console.log(req.body); 
  console.log(12);
  
  res.redirect("/")
  return
}]
// ===========================================
