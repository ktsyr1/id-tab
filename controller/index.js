const Center = require("../models/center");

exports.index = (req, res) => {
  Center.find({}, (err, centers) => {
    res.render("index", { centers: centers, title: " الدليل الطبي" });
  });
};
// ===========================================
exports.getAbout = (req, res) => {
  res.render("layout/about", { title: "حول الموقع" });
};
// ===========================================
exports.getContact = (req, res) => {
  res.render("layout/contact", { title: "اتصل بنا" });
};
// ===========================================