const express = require("express");
const router = express.Router(); 
const post = require("../models/post");

// newPost  

router.get("/:id/edit", (req, res) => {
    post.findOne({ _id: req.params.id }, (err, post) => {
        if (!err) {
            res.render("post/edit", {post: post});
        }
    });
});









router.put('/:id/edit')
router.delete("/:id/delete",(req, res) => {
    let id = req.query.id;
    if (id) {
      Center.remove({ _id: id }, (err, user) => {
        if (err) console.log(err);
        else res.redirect("/"); 
      });
    }
  });
 
module.exports = router;  