const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  title: {
    type: String,
    requied: true,
  },
  pice: {
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
});
