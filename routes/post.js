const router = require("express").Router();
const Post = require("../models/Post");
const path = require("path");
const verifyToken = require("../middlewares/verifyToken");
const multer = require("multer");

const fileUploadPaths = {
    FILE_UPLOAD_PATH: path.join(__dirname, "..", "client/public/uploads"),
};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
    },
});

const postFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let uploadPost = multer({
    storage: storage,
    fileFilter: postFilter,
});

router.post(
    "/addPost",
    verifyToken,
    uploadPost.single("img"),
    async (req, res) => {
        let post = {
            ...req.body,
            postCreator: req.user._id,
        };

        if (req.file) {
            const fileName = req.file.filename;
            post = {
                ...post,
                img: `${fileName}`,
            };
        }

        const FinalPost = await new Post(post).save();

        return res.json({ status: 201, post: FinalPost });
    }
);

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({}).populate("postCreator", "username ");
        res.json({
            status: true,
            msg: "all posts",
            posts,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.get("/getmyposts", verifyToken, async (req, res) => {
    try {
        const currentPosts = await Post.find({ postAuthor: req.user._id });
        res.json({
            status: true,
            msg: "sucess",
            currentPosts,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.put(
    "/updateMyPost/:id",
    verifyToken,
    uploadPost.single("img"),
    async (req, res) => {
        try {
            const { id } = req.params;
            console.log(req.file);
            if (req.file !== undefined) {
                const updatePost = await Post.findByIdAndUpdate(id, {
                    ...req.body,
                    img: req.file.filename,
                });
                res.json({
                    status: true,
                    msg: " updated success",
                    updatePost,
                });
            } else {
                const updatePost = await Post.findByIdAndUpdate(id, {
                    ...req.body,
                });
                res.json({
                    status: true,
                    msg: " updated success",
                    updatePost,
                });
            }
        } catch (err) {
            console.log(err);
            res.json({ status: 500, message: err });
        }
    }
);

router.delete("/deletepost/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await Post.findByIdAndDelete(id);
        res.json({
            status: true,
            msg: "deleted success",
            deletePost,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findOne({
            _id: id,
        }).populate("postCreator", "username ");
        res.json({ status: 200, msg: "get success", post });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.put("/comment/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.headers;
        const addComment = await Post.findByIdAndUpdate(id, {
            $push: { comments: { commenter: req.user.username, comment } },
        });

        res.json({
            status: true,
            msg: " comment added success",
            comment: { commenter: req.user.username, comment },
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});
module.exports = router;
