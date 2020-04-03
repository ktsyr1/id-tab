const express = require("express");
const router = express.Router(); 
const Center = require("../models/center");
 // centers
router.get("/add", (req, res) => {
    res.render("center/add", { title: " اظافة مركز" });
}).post("/add",(req, res) => {
    let newCenter = new Center({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        jurisdiction: req.body.jurisdiction,
        description: req.body.description,
        date: Date.now(), 
        created_at: Date.now()
    });
    newCenter.save(err => {
        if (!err) res.redirect("/")
        else console.log(err);
        
    });
});

router.get("/:id",(req, res) => {
    Center.findOne( { _id: req.params.id }, (err, center) => {
        if (!err) {
            res.render("center/show", {
            center: center 
            });
        }
    });
  });
router.get("/:id/edit",(req, res) => {
    Center.findOne( { _id: req.params.id }, (err, center) => {
        if (!err) {
            res.render("center/edit", {
            center: center,
            title: "تعديل المركز"
            });
        }
        else console.log(67879);
    });
  });
router.post('/:id/edit',(req, res) => {
    newCenter =new Center({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        jurisdiction: req.body.jurisdiction,
        description: req.body.description,
        date: Date.now()
    })
    newCenter.updateOne(  { _id: req.params.id } , newCenter,err => {
        if (!err) res.redirect("/")
    });
})
router.get("/:id/delete",(req, res) => {
    Center.deleteOne({ _id: req.params.id }, (err) => {
        if (!err) res.redirect('/')
    });
});
 
module.exports = router;
