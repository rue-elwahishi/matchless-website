const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    unique: [true, "Found another category with the same name, please choose another one"]
  }
});

module.exports = mongoose.model("Category", CategorySchema);
