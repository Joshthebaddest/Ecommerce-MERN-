const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    items:[{ 
        _id: {
            type: String,
            required: true
        },
        productName: {
            type: String,
        },
        price:  {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
            default: 1
        },
        images: []
    }],
    userId: String

});

module.exports = mongoose.model('Cart', cartSchema);