const express = require('express');

const {
    getAllSections,
    getSection,
    createSection,
    updateSection,
    deleteSection
} = require('../controllers/Sections');

const router = express.Router();

const { protect, authorize } = require('../middlewares/auth');

router.route('/').get(getAllSections).post(protect, authorize('admin'), createSection);

router.route('/:id').get(getSection).put(protect, authorize('admin'), updateSection).delete(protect, authorize('admin'), deleteSection);

module.exports = router;