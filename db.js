require("dotenv").config();

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

const Song = require("./models/songModel");
const Artist = require("./models/artistModel");
const PopularSong = require("./models/popularSongModel");

async function connectDB() {
  try {
    await mongoose.connect(mongoString);
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

async function populateDatabase() {
  // Contoh data untuk songsData
  const songsData = [
    {
      title: "Lagu A",
      artists: ["Artis 1"],
      album: "Album X",
    },
    {
      title: "Lagu B",
      artists: ["Artis 2", "Artis 3"],
      album: "Album Y",
    },
    {
      title: "Lagu C",
      artists: ["Artis 4"],
      album: "Album Z",
    },
    // Tambahkan data lagu lainnya jika diperlukan
  ];

  // Contoh data untuk artistsData
  const artistsData = [
    {
      name: "Artis 1",
      dateOfBirth: "1990-05-15", // Tanggal lahir artis
      genres: ["Pop", "R&B"],
    },
    {
      name: "Artis 2",
      dateOfBirth: "1985-11-20",
      genres: ["Rock"],
    },
    {
      name: "Artis 3",
      dateOfBirth: "1992-03-08",
      genres: ["Pop", "Indie"],
    },
    // Tambahkan data artis lainnya jika diperlukan
  ];

  // Contoh data untuk popularSongsData
  const popularSongsData = [
    {
      title: "Lagu A",
      playCount: 100, // Jumlah kali lagu diputar
      periodOfTime: "bulan ini",
    },
    {
      title: "Lagu B",
      playCount: 75,
      periodOfTime: "minggu lalu",
    },
    {
      title: "Lagu C",
      playCount: 120,
      periodOfTime: "bulan ini",
    },
    // Tambahkan data lagu populer lainnya jika diperlukan
  ];

  try {
    await Song.insertMany(songsData);
    await Artist.insertMany(artistsData);
    await PopularSong.insertMany(popularSongsData);
    console.log("Database populated succesfully.");
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
}

module.exports = { connectDB, populateDatabase };
