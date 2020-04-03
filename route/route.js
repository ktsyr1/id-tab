const router = require("express").Router(); 
const Center = require("../models/center");

// home  
router.get("/", (req, res) => {
    Center.find({}, (err, centers) => { 
        res.render("index", { centers: centers});
    });
});
router.get("/about",  (req, res) => {
    res.render("layout/about", { title: "حول الموقع" });
});
router.get("/contact", (req, res) => {
    res.render("layout/contact", { title: "اتصل بنا" });
});
 
module.exports = router;
