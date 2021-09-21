const express = require("express");
const { Register, Login } = require("../controllers/user.C");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");
const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");
const User = require("../models/User");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("testing router");
});

/*
@method:post
@path:http:localhost:500/api/user/register
@parameter:req.body
public
*/
router.post("/register", registerValidate(), validation, Register);
/*
@method:post
@path:http:localhost:500/api/user/login
@parameter:req.body
public
*/

router.post("/login", loginValidate(), validation, Login); /*
@method:get
@path:http:localhost:500/api/user/current
@parameter:req.headers
public
*/

router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});
// @method:get
// @path:http:localhost:500/api/user/admin
// @parameter:req.headers
// public

router.get("/admin", isAdmin, (req, res) => {
    res.send({ msg: "you are not Admin", user: req.user });
});

router.get("/profileList", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ msg: "impossible to get users" });
    }
});

router.put(`/:Id`, async (req, res) => {
    try {
        const id = req.params.Id;
        await User.updateOne({ _id: id }, { $set: { ...req.body } });
        res.status(200).send({ msg: "user edited" });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to edit users");
    }
});

router.get(`/:Id`, async (req, res) => {
    try {
        const id = req.params.Id;
        const user = await User.findById(id);
        res.status(200).send({ msg: "user found", user });
    } catch (error) {
        res.status(500).send("impossible to get user");
    }
});

module.exports = router;
