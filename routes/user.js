const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
require("dotenv").config();

router.post("/inscription", async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
                res.status(500).json({ status: false, message: err });
            } else if (hash) {
                const user = await User.create({
                    username,
                    email,
                    password: hash,
                    role,
                });
                res.status(201).json({
                    status: true,
                    message: "user created",
                    data: user,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: "Something wrong" });
    }
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    password,
                    user.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            jwt.sign(
                                { user },
                                process.env.SECRET_KEY,
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        status: true,
                                        msg: "Succesfully Login",
                                        token: token,
                                    });
                                }
                            );
                        } else {
                            res.json({
                                status: false,
                                msg: "Invalid Password",
                            });
                        }
                    }
                );
            } else {
                res.json({
                    status: false,
                    msg: "Invalid Email or Password",
                });
            }
        })
        .catch((err) => console.log(err));
});

router.get("/current", verifyToken, (req, res) => {
    if (req.user) {
        res.send({ status: true, msg: "Authorized", user: req.user });
    } else {
        res.send({ status: false, msg: "Unauthorized" });
    }
});

module.exports = router;
