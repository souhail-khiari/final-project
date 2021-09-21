console.clear();
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config();
connectDB();

app.use(express.json());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, req.body.name);
//     },
// });
// const upload = multer({ storage: storage });
// app.post("api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("file has been uploaded");
// });
app.use("/api/user", require("./router/user"));
app.use("/api/post", require("./router/post"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
