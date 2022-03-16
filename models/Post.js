const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    datePost: {
        type: Date,
        default: new Date(),
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: {
        type: [{}],
    },
});

module.exports = mongoose.model("post", postSchema);
