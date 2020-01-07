const express = require('express')

const {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/items');

const router = express.Router();

const { protect, authorize } = require('../middlewares/auth');

router.route('/').get(getAllItems).post(protect, authorize('admin'), createItem);

router.route('/:id').get(getItem).put(protect, authorize('admin'), updateItem).delete(protect, authorize('admin'), deleteItem);

module.exports = router;
