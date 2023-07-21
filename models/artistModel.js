// models/artistModel.js
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  genres: {
    type: [String],
  },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
