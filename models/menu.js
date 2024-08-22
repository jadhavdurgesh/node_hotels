const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy']
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    numsales: {
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
