const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const novelSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    link: { type: String}
    

});

const Novel = mongoose.model("Novel", novelSchema);
module.exports = Novel;