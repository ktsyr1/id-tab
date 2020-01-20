const express = require("express");
const router = express.Router();
const c_center = require("../controller/center");
const c_index = require("../controller/index"); 

// home 
router.get("/", c_index.index);
router.get("/about", c_index.getAbout);
router.get("/contact", c_index.getContact);

// centers
router.get("/add", c_center.getAdd);
router.post("/add", c_center.addCenter);

router.get("/:id", c_center.viewCenter);
router.get("/:id/edit", c_center.editCenter);
router.delete("/:id/delete", c_center.deleteCenter);
 
module.exports = router;
