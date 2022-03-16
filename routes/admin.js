const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
require("dotenv").config();

router.get("/", verifyToken, async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const users = await User.find({ role: "user" });
      res.json({ status: 200, msg: "users ok", users });
    }
  } catch (error) {
    res.json({ status: 500, msg: error });
  }
});

router.delete("/deletePost/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role === "admin") {
      const deletePost = await Post.findByIdAndDelete(id);
      res.json({ status: true, msg: "post deleted", deletePost });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteUser/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.role === "admin") {
      const deleteUser = await User.findByIdAndDelete(id);
      res.json({ status: true, msg: "user deleted", deleteUser });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/current", verifyToken, (req, res) => {
  if (req.user) {
    res.send({ status: true, msg: "Authorized", user: req.user });
  } else {
    res.send({ status: false, msg: "Unauthorized" });
  }
});

module.exports = router;
