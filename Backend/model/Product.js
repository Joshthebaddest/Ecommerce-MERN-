const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantityAvailable: {
    type: Number,
    required: true,
    min: 0,
  },
  images: [String],
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;
