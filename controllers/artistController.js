// controllers/artistController.js
const artistService = require("../services/artistService");

async function addArtist(req, res) {
  const { name, dateOfBirth, genres } = req.body;

  try {
    const newArtist = await artistService.addArtist(name, dateOfBirth, genres);
    res
      .status(201)
      .json({ message: "Artist added successfully.", artist: newArtist });
  } catch (error) {
    console.error("Error adding artist:", error);
    res.status(500).json({ message: "Failed to add artist." });
  }
}

async function addManyArtist(req, res) {
  const { artistsData } = req.body;

  try {
    const addedArtists = await artistService.addManyArtists(artistsData);
    res
      .status(201)
      .json({ message: "Artists added successfully.", artists: addedArtists });
  } catch (error) {
    console.error("Error adding artists:", error);
    res.status(500).json({ message: "Failed to add artists." });
  }
}

async function getAllArtists(req, res) {
  try {
    const artists = await artistService.getAllArtists();
    res.json(artists);
  } catch (error) {
    console.error("Error getting artists:", error);
    res.status(500).json({ message: "Failed to get artists." });
  }
}

async function getArtistById(req, res) {
  const { id } = req.params;

  try {
    const artist = await artistService.getArtistById(id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.json(artist);
  } catch (error) {
    console.error("Error getting artist by ID:", error);
    res.status(500).json({ message: "Failed to get artist." });
  }
}

module.exports = {
  addArtist,
  addManyArtist,
  getAllArtists,
  getArtistById,
};
