const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true }

});

module.exports = mongoose.model("Form", formSchema);