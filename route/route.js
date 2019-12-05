const express = require("express");
const router = express.Router();
const Center = require("../models/center");
router.get("/", (req, res) => {
  Center.find({}, (err, centers) => {
    let chunk = [];
    let chunkSize = 3;
    for (let i = 0; i < centers.length; i += chunkSize) {
      chunk.push(centers.slice(i, chunkSize + i));
    }
    res.render("../view/center/index.ejs", {
      chunk: chunk
    });
  });
});
router.get("/about", (req, res) => {
  res.render("../view/themes/about.ejs");
});
router.get("/contact", (req, res) => {
  res.render("../view/themes/contact.ejs");
});
router.get("/add", (req, res) => {
  res.render("../view/center/add.ejs");
});
router.post("/add"
// ,[
//   chunk('name').isLength({min:5}).withMessage('Title should be more than 5 char'),,
//   chunk('phone').isLength({min:5}).withMessage('Title should be more than 5 char'),,
//   chunk('address').isLength({min:5}).withMessage('Title should be more than 5 char'),,
//   chunk('jurisdiction').isLength({min:5}).withMessage('Title should be more than 5 char'),,
//   chunk('description').isLength({min:5}).withMessage('Title should be more than 5 char'),,
//   chunk('date').isLength({min:5}).withMessage('Title should be more than 5 char'),,
// ]
, (req, res) => {
  // const err = validationResult(req);
  // if (err.isEmpty()) {
  //   return res.status(422).json({ err: err.array() });
  // }
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
        res.redirect("/ar");
      }
  })
  
});
router.get("/:id", (req, res) => {
  Center.findOne({ _id: req.params.id }, (err, center) => {
    if (!err) {
      res.render("../view/center/show.ejs", {
        center: center
      });
      console.log(err);
    }
  });
});

module.exports = router;
