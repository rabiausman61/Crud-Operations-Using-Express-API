var express = require('express');
var router = express.Router();
var User= require("../models/user")
/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render("users/register");
});

router.post('/register',async function(req, res, next) {
  let user= new User(req.body);
  await user.save();
  res.redirect("/");
});

router.get('/login', function(req, res, next) {
  res.render("users/login");
});

router.post('/login', async function(req, res, next) {
  let user = await User.findOne({
    email:req.body.email, 
    password:req.body.password});
  if (!user) return res.redirect("/login");
  req.session.user=user;
  return res.redirect("/products");
});


module.exports = router;
