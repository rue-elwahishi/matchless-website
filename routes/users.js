const express = require("express");
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users");

const { protect, authorize } = require('../middlewares/auth');


const router = express.Router();
router
    .route("/")
    .get(protect, authorize('admin', 'user'), getUsers)
    .post(protect, authorize('admin', 'user'), createUser);
router
    .route("/:id")
    .get(protect, authorize('admin', 'user'), getUser)
    .put(protect, authorize('admin', 'user'), updateUser)
    .delete(protect, authorize('admin', 'user'), deleteUser);

module.exports = router;
