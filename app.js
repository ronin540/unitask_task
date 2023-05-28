require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const db = require("./config/db");
const userRoute = require("./routes/user.route");
const jokeRoute = require("./routes/randomJokes.route");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");
const app = express();

const PORT = process.env.APP_PORT || 3000;

db.authenticate()
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Error: " + err));

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoute);
app.use(jokeRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
