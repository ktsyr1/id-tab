const express = require("express");
const router = express.Router();
const Center = require("../models/center");

const { check, validationResult } = require('express-validator')
router.get("/", (req, res) => {
  Center.find({}, (err, centers) => {
    let chunk = [];
    let chunkSize = 3;
    for (let i = 0; i < centers.length; i += chunkSize) {
      chunk.push(centers.slice(i, chunkSize + i));
    }
    res.render("../views/center/index", {
      chunk: chunk
    });
  });
});
router.get("/about", (req, res) => {
  res.render("../views/themes/about");
});
router.get("/contact", (req, res) => {
  res.render("../views/themes/contact");
});
router.get("/add", (req, res) => {
  res.render("../views/center/add",{
    errors:false
  });
});
router.post("/add",
[
  check('name').isLength({min:5}).withMessage('Title should be more than 5 char'),
  check('phone').isLength({min:7}).withMessage('Title should be more than 5 char'),
  check('address').isLength({min:5}).withMessage('Title should be more than 5 char'),
  check('jurisdiction').isLength({min:2}).withMessage('Title should be more than 5 char'),
  check('description').isLength({min:5}).withMessage('Title should be more than 5 char'),
  check('date').isLength({min:5}).withMessage('Title should be more than 5 char')
],
 (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.redirect('/',{
      errors: errors.array()
    })
   }else{ 
      let newCenter = new Center({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    jurisdiction: req.body.jurisdiction,
    description: req.body.description,
    date: req.body.date,
    created_at: Date.now()
  });
  newCenter.save((err)=>{
      if (!err){
          console.log('add center'); 
        res.redirect("/");
      }
  })}

  
});
router.get("/:id", (req, res) => {
  Center.findOne({ _id: req.params.id }, (err, center) => {
    if (!err) {
      res.render("../views/center/show", {
        center: center
      });
      console.log(err);
    }
  });
}); 
module.exports = router;
