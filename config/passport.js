const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { signInSchema } = require("../validators");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const verifyCallback = async (email, password, done) => {
  try {
    const result = await signInSchema.validateAsync({ email, password });
    let user = await User.findOne({ where: { email: result.email } });
    if (!user) {
      throw createError(401, `Invalid username or password`);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw createError(401, `Invalid username or password`);
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
};
const strategy = new LocalStrategy({ usernameField: "email" }, verifyCallback);
passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    let user = userId;

    done(null, user);
  } catch (error) {
    done(error);
  }
});
