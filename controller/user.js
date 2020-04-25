const User = require("../models/user");
const { check, validationResult } = require("express-validator");
// const 
const passport = require('passport')

exports.getlogin = (req, res) => {
  if (req.user) res.redirect('/')
  else  res.render("user/login", { title: " دخول تسجيل" });
};
// exports.postlogin = 
// ===========================================
exports.getsignup = (req, res) => {
  var merror = req.flash("error") 
  if (req.user) res.redirect('/')
  else res.render("user/signup", { title: "تسجيل ", message : merror});
};
exports.postSignup = [
  [
    check("email")
      .not()
      .isEmpty()
      .withMessage("لا يوجد ايميل "),
    check("email")
      .isEmail()
      .withMessage("الايميل خطاء"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("لا يوجد كلمر سر "),
    check("password")
      .isLength({ min: 5 })
      .withMessage("كلمة السر اقل من 5 حروف")
  ],
  (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      var vm = [];
      for(var i =0 ; i <errors.errors.length;i++){
        vm.push(errors.errors[i].msg)
      } 
      req.flash('error' ,vm)
      
      
    }

    let newUser = new User({
      email: req.body.email,
      password: new User().hashPassword(req.body.password)
    });
    console.log(req.body);
    
    User.findOne({ email: req.body.email }, (err, result) => {
    // console.log(result);
    console.log(newUser.password);

      if (!result) {
        newUser.save((err, data) => {
          if (err) req.flash('error' , "هناك خطاء الرجاء اعادة المحاولة") 
           else res.redirect('/') 
        });
      }
       else {
        req.flash('error', `لقد تم استخدام هذا الايميل ${req.body.email} من قبل`);
        res.redirect('/users/signup') 

      } 
    }); 
  }
]; 

exports.getsignup = (req,res,next) =>{
  passport.authenticate('local', {
      successRedirect: 'dashboard',
      failureRedirect: 'login',
      failureFlash: true
  })(req,res,next)
}
 