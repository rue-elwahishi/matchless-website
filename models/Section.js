const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({

    title: {
        type: String,
        minlength: [1, "Please enter more than 1 characters"],
        maxlength: [100, "title can not be more than 100 characters"],
        required: true
    },
    imageUrl: {
        type: String
    },
    // id: {
    //     type: [0, "id must be more than 0"]
    // },
    linkUrl: {
        type: String
    },
    size: {
        type: String
    }
},
    //enable virtual list
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        id: false
    }
)

//reverse populate every section with a virtual categories list
SectionSchema.virtual('categories',
    {
        ref: 'Category',
        localField: '_id',
        foreignField: 'section',
        justOne: false
    })
module.exports = mongoose.model("Section", SectionSchema);
