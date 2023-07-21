// routes/index.js
const express = require('express');
const router = express.Router();

const songController = require('../controllers/songController');
const artistController = require('../controllers/artistController');
const popularSongController = require('../controllers/popularSongController');

// Endpoint untuk lagu
router.get('/song', songController.getAllSongs);
router.get('/song/:id', songController.getSongById);
router.post('/add-song', songController.addSong);
router.post('/add-songs', songController.addManySong);
// router.put('/update-song/:id', songController.updateSong);
// router.delete('/delete-song/:id', songController.deleteSong);

// Endpoint untuk artis
router.get('/artist', artistController.getAllArtists);
router.get('/artist/:id', artistController.getArtistById);
router.post('/add-artist', artistController.addArtist);
router.post('/add-artists', artistController.addManyArtist);
// router.put('/update-artist/:id', artistController.updateArtist);
// router.delete('/delete-artist/:id', artistController.deleteArtist);

// Endpoint untuk lagu populer
router.get('/popular-song', popularSongController.getAllPopularSongs);
router.get('/popular-song/:id', popularSongController.getPopularSongById);
router.post('/add-popular-song', popularSongController.addPopularSong);
router.post('/add-popular-songs', popularSongController.addPopularSong);
// router.put('/update-popular-song/:id', popularSongController.updatePopularSong);
// router.delete('/delete-popular-song/:id', popularSongController.deletePopularSong);

module.exports = router;
