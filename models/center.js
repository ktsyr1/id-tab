const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const centerSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    jurisdiction: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: "" },
    created_at: { type: Date, required: "" }
});
const Center = mongoose.model('Center', centerSchema, 'center');
module.exports = Center;