// services/popularSongService.js
const PopularSong = require('../models/popularSongModel');

async function addPopularSong(title, playCount, periodOfTime) {
  const newPopularSong = new PopularSong({
    title,
    playCount,
    periodOfTime,
  });
  await newPopularSong.save();
  return newPopularSong;
}

async function addManyPopularSongs(popularSongsData) {
    const addedPopularSongs = await PopularSong.insertMany(popularSongsData);
    return addedPopularSongs;
  }

async function getAllPopularSongs() {
  const popularSongs = await PopularSong.find();
  return popularSongs;
}

async function getPopularSongById(id) {
  const popularSong = await PopularSong.findById(id);
  return popularSong;
}

module.exports = {
  addPopularSong,
  getAllPopularSongs,
  getPopularSongById,
};
