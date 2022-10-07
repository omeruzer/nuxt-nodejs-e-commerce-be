const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv/config')
module.exports =async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = await User.findById(decoded.user._id).select("-password")
            next()
        } catch (error) {
            res.status(401).json({
                message: "Token Not Found"
            })
        }
    }
    if (!token) {
        res.status(401).json({
            message: "Token Not Found"
        })

    }
}

