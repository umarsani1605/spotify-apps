// controllers/songController.js
const songService = require("../services/songService");

async function addSong(req, res) {
  const { title, artists, album } = req.body;

  try {
    const newSong = await songService.addSong(title, artists, album);
    res
      .status(201)
      .json({ message: "Song added successfully.", song: newSong });
  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({ message: "Failed to add song." });
  }
}

async function addManySong(req, res) {
  const { songsData } = req.body;

  try {
    const addedSongs = await songService.addManySongs(songsData);
    res
      .status(201)
      .json({ message: "Songs added successfully.", songs: addedSongs });
  } catch (error) {
    console.error("Error adding songs:", error);
    res.status(500).json({ message: "Failed to add songs." });
  }
}

async function getAllSongs(req, res) {
  try {
    const songs = await songService.getAllSongs();
    res.json(songs);
  } catch (error) {
    console.error("Error getting songs:", error);
    res.status(500).json({ message: "Failed to get songs." });
  }
}

async function getSongById(req, res) {
  const { id } = req.params;

  try {
    const song = await songService.getSongById(id);
    if (!song) {
      return res.status(404).json({ message: "Song not found." });
    }
    res.json(song);
  } catch (error) {
    console.error("Error getting song by ID:", error);
    res.status(500).json({ message: "Failed to get song." });
  }
}

module.exports = {
  addSong,
  getAllSongs,
  getSongById,
  addManySong,
};
