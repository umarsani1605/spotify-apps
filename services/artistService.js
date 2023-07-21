// services/artistService.js
const Artist = require("../models/artistModel");

async function addArtist(name, dateOfBirth, genres) {
  const newArtist = new Artist({
    name,
    dateOfBirth,
    genres,
  });
  await newArtist.save();
  return newArtist;
}

async function addManyArtists(artistsData) {
  const addedArtists = await Artist.insertMany(artistsData);
  return addedArtists;
}

async function getAllArtists() {
  const artists = await Artist.find();
  return artists;
}

async function getArtistById(id) {
  const artist = await Artist.findById(id);
  return artist;
}

module.exports = {
  addArtist,
  addManyArtists,
  getAllArtists,
  getArtistById,
};
