// controllers/popularSongController.js
const popularSongService = require("../services/popularSongService");

// Controller untuk menambahkan data lagu populer baru
async function addPopularSong(req, res) {
  const { title, playCount, periodOfTime } = req.body;

  try {
    const newPopularSong = await popularSongService.addPopularSong(title, playCount, periodOfTime);
    res
      .status(201)
      .json({ message: "Popular song added successfully.", popularSong: newPopularSong });
  } catch (error) {
    console.error("Error adding popular song:", error);
    res.status(500).json({ message: "Failed to add popular song." });
  }
}

// Controller untuk menambahkan banyak data lagu populer sekaligus
async function addManyPopularSong(req, res) {
  const { popularSongsData } = req.body;

  try {
    const addedPopularSongs = await popularSongService.addManyPopularSongs(popularSongsData);
    res
      .status(201)
      .json({ message: "Popular songs added successfully.", popularSongs: addedPopularSongs });
  } catch (error) {
    console.error("Error adding popular songs:", error);
    res.status(500).json({ message: "Failed to add popular songs." });
  }
}

// Controller untuk mendapatkan daftar semua data lagu populer
async function getAllPopularSongs(req, res) {
  try {
    const popularSongs = await popularSongService.getAllPopularSongs();
    res.json(popularSongs);
  } catch (error) {
    console.error("Error getting popular songs:", error);
    res.status(500).json({ message: "Failed to get popular songs." });
  }
}

// Controller untuk mendapatkan data lagu populer berdasarkan ID
async function getPopularSongById(req, res) {
  const { id } = req.params;

  try {
    const popularSong = await popularSongService.getPopularSongById(id);
    if (!popularSong) {
      return res.status(404).json({ message: "Popular song not found." });
    }
    res.json(popularSong);
  } catch (error) {
    console.error("Error getting popular song by ID:", error);
    res.status(500).json({ message: "Failed to get popular song." });
  }
}

module.exports = {
  addPopularSong,
  addManyPopularSong,
  getAllPopularSongs,
  getPopularSongById,
};
