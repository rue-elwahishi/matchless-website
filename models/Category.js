const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    unique: [true, "Found another collection with the same name, please choose another one"]
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section"
  }
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false
});

// Cascade delete items when a collection is deleted
CategorySchema.pre('remove', async function (next) {
  await this.model('Item').deleteMany({ category: this._id });
  next();
});

//reverse populate with virtuals
CategorySchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'category',
  justOne: false
});

module.exports = mongoose.model("Category", CategorySchema);
