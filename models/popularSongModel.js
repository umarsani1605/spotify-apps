// models/popularSongModel.js
const mongoose = require("mongoose");

const popularSongSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  playCount: {
    type: Number,
    default: 0,
  },
  periodOfTime: {
    type: String,
  },
});

const PopularSong = mongoose.model("PopularSong", popularSongSchema);

module.exports = PopularSong;
