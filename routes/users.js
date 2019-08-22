var express = require("express");
var router = express.Router();
var passport = require("passport");
var Users = require("../models/user");
var authenticate = require("../authenticate");

router.post("/signup", (req, res, next) => {
  const { email, password, FirstName,LastName,Country,role } = req.body;
  Users.register(
    new Users({ username: email, FirstName,LastName,Country,role}),
    password,
    (err, user) => {
      if (err) return next(err);
      user.save(err => {
        if (err) return next(err);
        const token = authenticate.getToken({
          _id: user._id,
          name: user.FirstName,
          role: user.role
        });
        // res.setHeader("content-type", "application/json");
        // res.statusCode = 200;
        res.json({ success: true, message: "Signup successfully", token });
      });
    }
  );
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
 
    if (err) return next(err);
    if (!user) {
      res.setHeader("content-type", "application/json");
      res.statusCode = 401;
      res.json({ success: false, message: "Login Un successfull", info: info });
      return;
    }
    req.logIn(user, { session: false }, err => {
      if (err) {
        res.setHeader("content-type", "application/json");
        res.statusCode = 401;
        res.json({ success: false, message: "Login Un successfull", err: err });
        return;
      }
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      const token = authenticate.getToken({
        _id: user._id,
        role: user.role,
        name: user.name
      });
      res.json({ success: true, message: "Login Successfull", token });
    });
  })(req, res, next);
});

module.exports = router;
