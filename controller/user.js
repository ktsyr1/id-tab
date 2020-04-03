const user = require("../models/user");
const { check, validationResult } = require("express-validator");
// const 

exports.getlogin = (req, res) => {
  res.render("user/login", { title: " دخول تسجيل" });
};
// exports.postlogin = 
// ===========================================
exports.getsignup = (req, res) => {
  var merror = req.flash("error") 
  
  res.render("user/signup", { title: "تسجيل  ",  message : merror});
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

    let newUser = new user({
      email: req.body.email,
      password: req.body.password
    });
    user.findOne({ email: req.body.email }, (err, result) => {
      if (!result) {
        newUser.save((err, data) => {
          if (err){ 
            req.flash('error' , "هناك خطاء الرجاء اعادة المحاولة") 
            res.redirect('/home') 
          }
        });
      } else {
        req.flash('error', `لقد تم استخدام هذا الايميل ${req.body.email} من قبل`);
        res.redirect('/users/signup') 

      }
    });

  }
]; 