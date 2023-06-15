const axios = require("axios");
const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middlewares/authentication");

router.get("/api/random-joke", verifyUser, async (req, res, next) => {
  try {
    let joke = await axios.get("https://api.chucknorris.io/jokes/random");
    joke.data.value = joke?.data?.value?.split(" ")?.reverse()?.join(" ");
    res.send(joke.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
