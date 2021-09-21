const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema, model } = mongoose;
const postSchema = new Schema({
    title: { type: String, required: true },
    body: {
        type: String,
        required: true,
    },
    // photo: { type: String, required: true },
    postedBy: { type: ObjectId, ref: "user" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
module.exports = Post = model("post", postSchema);
