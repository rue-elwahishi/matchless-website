const express = require('express')

const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/items');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.route('/').get(getAllItems).post(protect, createItem);

router.route('/:id').get(getItem).put(protect, updateItem).delete(protect, deleteItem);

module.exports = router;
