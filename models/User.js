const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    job: { type: String, required: true },
    role: { type: String, default: "User" },
});
module.exports = User = model("user", userSchema);
