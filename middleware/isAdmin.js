const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res
                .status(401)
                .send({ error: [{ msg: "you are not authorized" }] });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: decoded.id }).select(
            "-password"
        );
        if (!user) {
            return res
                .status(401)
                .send({ error: [{ msg: "you are not authorized" }] });
        }
        if (user.role !== "Admin") {
            return res.status(401).send({
                errors: [{ msg: " you are not authorized" }],
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: [{ msg: "you are not authorized" }] });
    }
};
module.exports = isAdmin;
