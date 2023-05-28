const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const { signupSchema } = require("../validators");
const { verifyUser } = require("../middlewares/authentication");
const User = require("../models/User");
const passport = require("passport");

router.post("/signup", async (req, res, next) => {
  try {
    const result = await signupSchema.validateAsync(req.body);
    const emailExist = await User.findOne({ where: { email: result.email } });
    if (emailExist) {
      throw createError.Conflict(`${result.email} is already been registered`);
    }
    const createdUser = await User.create(result);
    res.json({ message: "User created succesfully" });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/login",
  passport.authenticate("local"),
  async (req, res, next) => {
    try {
      res.json({ message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }
);
router.post("/me", verifyUser, async (req, res, next) => {
  try {
    console.log({ user: req.user });
    let profileData = await User.findOne({
      where: { id: req.user },
      attributes: { exclude: ["password"] },
    });
    if (!profileData) {
      throw createError();
    }
    res.json({
      message: "Success",
      data: profileData,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", verifyUser, (req, res, next) => {
  try {
    req.session.destroy();
    res.json({ message: "Logout successfull" });
  } catch (error) {
    next();
  }
});

module.exports = router;
