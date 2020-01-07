const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {

    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        // else if(req.cookies.token) {
        //     token = req.cookies.token;
        // }

        // making sure the token exists
        if (!token) {
            return res.status(401).json({
                success: false,
                msg: "Not Authorized to access this route"
            });
        }

        try {
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log(decoded);
            req.user = await User.findById(decoded.id);
            next();

        } catch (e) {
            return res.status(401).json({
                success: false,
                msg: "Not Authorized to access this route"
            });
        }

    } catch (e) {
        return res.status(401).json({
            success: false,
            msg: "Token Error, Not Authorized to access this route"
        });
    }

};

// Authorize routes based on roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                msg: `This user with this role :${req.user.role} is not authorized to access this route`
            });
        }
        next();
    }
};
