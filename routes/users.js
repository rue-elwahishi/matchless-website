const express = require('express');
const controller = require('../controllers/users')
const router = express.Router();



router.route('/').get(controller.getAllUsers).post(controller.createUser)

router.route('/:id').get(controller.gerUser).put(controller.updateUser).delete(controller.deleteUser)



module.exports = router;