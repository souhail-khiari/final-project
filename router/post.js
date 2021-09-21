const express = require("express");
const isAuth = require("../middleware/isAuth");
// const post = require("../models/post");

const Post = require("../models/post");
const router = express.Router();

router.get("/allpost", (req, res) => {
    Post.find()
        // .populate("", "_postedByid name")
        .populate("postedBy", "_id name")
        .sort("-createdAt")
        .then((posts) => {
            res.json({ posts });
        })
        .catch((err) => {
            console.log("cant save it");
        });
});

router.post("/createpost", isAuth, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ error: "Plase add all the fields" });
    }
    // req.user.password = undefined;
    const post = new Post({
        ...req.body,
        // title,
        // body,
        // // photo: pic,
        postedBy: req.user,
    });

    post.save()
        .then((result) => {
            res.json({ post: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/mypost", isAuth, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then((myposts) => {
            res.json({ myposts });
        })
        .catch((err) => {
            res.send("cant get it");
        });
});

router.delete(`/:Id`, async (req, res) => {
    try {
        const id = req.params.Id;
        const post = await Post.deleteOne({ _id: id });
        res.status(200).send({ msg: "post deleted", post });
    } catch (error) {
        res.status(500).send({ msg: "impossible to delete posts" });
    }
});
router.get(`/:Id`, async (req, res) => {
    try {
        const id = req.params.Id;
        const post = await Post.findById(id);
        res.status(200).send({ msg: "post found", post });
    } catch (error) {
        res.status(500).send("impossible to get post");
    }
});

module.exports = router;
