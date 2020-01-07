const express = require('express');

const {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/Categories');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.route('/').get(getAllCategories).post(protect, createCategory);

router.route('/:id').get(getCategory).put(protect, updateCategory).delete(protect, deleteCategory);

module.exports = router;

