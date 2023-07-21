// services/songService.js
const Song = require('../models/songModel');

// Service untuk menambahkan lagu baru
async function addSong(title, artists, album) {
  const newSong = new Song({
    title,
    artists,
    album,
  });
  await newSong.save();
  return newSong;
}

// Service untuk menambahkan banyak lagu sekaligus
async function addManySongs(songsData) {
  const addedSongs = await Song.insertMany(songsData);
  return addedSongs;
}

// Service untuk mendapatkan daftar semua lagu
async function getAllSongs() {
  const songs = await Song.find();
  return songs;
}

// Service untuk mendapatkan lagu berdasarkan ID
async function getSongById(id) {
  const song = await Song.findById(id);
  return song;
}

module.exports = {
  addSong,
  addManySongs,
  getAllSongs,
  getSongById,
};
