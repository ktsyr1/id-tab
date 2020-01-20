const Center = require("../models/center");

exports.getAdd = (req, res) => {
  res.render("center/add", { title: " اظافة مركز" });
};
// ===========================================

exports.editCenter = (req, res) => {
  Center.findOne({ _id: req.params.id }, (err, center) => {
    if (!err) {
      res.render("center/edit", {
        center: center,
        title: "تعديل المركز"
      });
    }
  });
};
// ===========================================

exports.addCenter = (req, res) => {
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
    if (!err) {
      console.log("add center");
      res.redirect("/");
    }
  });
};
// ===========================================

exports.viewCenter = (req, res) => {
  Center.findOne({ _id: req.params.id }, (err, center) => {
    if (!err) {
      res.render("../views/center/show", {
        center: center,
        title: center.name
      });
    }
  });
};
// ===========================================

exports.deleteCenter = (req, res) => {
  console.log("err");
  let id = req.query.id;
  if (id) {
    Center.remove({ _id: id }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
        console.log("err");
      }
    });
  }
};
