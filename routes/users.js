<<<<<<< HEAD
const express = require('express');
const controller = require('../controllers/users')
const router = express.Router();



router.route('/').get(controller.getAllUsers).post(controller.createUser)

router.route('/:id').get(controller.gerUser).put(controller.updateUser).delete(controller.deleteUser)


=======
const express = require("express");
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/users");

const router = express.Router();
router
  .route("/")
  .get(getUsers)
  .post(createUser);
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);
>>>>>>> bd3e8db98163d5dcf48b9293fee84a1b201cb04b

module.exports = router;