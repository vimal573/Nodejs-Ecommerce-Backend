const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  title: {
    type: String,
    requied: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    requied: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Product', productionSchema);
