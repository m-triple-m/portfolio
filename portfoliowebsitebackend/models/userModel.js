const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: String,
    mobile: String,
    address: String,
    password: String,
})

const model = mongoose.model('users', schema);

module.exports = model;