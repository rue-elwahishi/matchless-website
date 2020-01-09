const Section = require("../models/Section");
//  @desc Get all Sections
//  @route GET /api/v1/Sections
//  @access Public

exports.getAllSections = async (req, res, next) => {
    try {
        const Sections = await Section.find().populate('categories');
        res.status(200).json({
            success: true,
            data: Sections
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};


//  @desc Get a single section
//  @route GET /api/v1/sections/:id
//  @access Public
exports.getSection = async (req, res, next) => {
    try {
        const aSection = await Section.findById(req.params.id).populate('categories');;
        if (!aSection) {
            return res.status(400).success({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: aSection
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};


//  @desc Create a single section
//  @route POST /api/v1/sections
//  @access Private
exports.createSection = async (req, res, next) => {
    try {
        console.log(req.body);
        const aSection = await Section.create(req.body);

        res.status(201).json({
            success: true,
            data: aSection
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};


//  @desc Update a single section
//  @route PUT /api/v1/sections/:id
//  @access Private

exports.updateSection = async (req, res, next) => {
    try {
        const aSection = await Section.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!aSection) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: aSection
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};


//  @desc delete a single section
//  @route DELETE /api/v1/sections/:id
//  @access Private
exports.deleteSection = async (req, res, next) => {
    try {
        const aSection = await Section.findByIdAndDelete(req.params.id);
        if (!aSection) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};