const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    program: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        required: true
    }
});

module.exports = schema;