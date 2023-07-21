// // This code works in mongosh

// // 1. Create database
// use spotify;

// // 2. Create collection
// db.createCollection("Songs");
// db.createCollection("Artists");
// db.createCollection("PopularSongs");

// // 3. Populate database
// db.Songs.insertMany([
//   {
//     title: "Song 1",
//     artist: "Artist A",
//     album: "Album X",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist B",
//     album: "Album Y",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist C",
//     album: "Album Z",
//   },
//   {
//     title: "Song 4",
//     artist: "Artist D",
//     album: "Album X",
//   },
//   {
//     title: "Song 5",
//     artist: "Artist E",
//     album: "Album Y",
//   },
//   {
//     title: "Song 6",
//     artist: "Artist F",
//     album: "Album Z",
//   },
//   {
//     title: "Song 7",
//     artist: "Artist G",
//     album: "Album X",
//   },
//   {
//     title: "Song 8",
//     artist: "Artist H",
//     album: "Album Y",
//   },
//   {
//     title: "Song 9",
//     artist: "Artist I",
//     album: "Album Z",
//   },
//   {
//     title: "Song 10",
//     artist: "Artist J",
//     album: "Album X",
//   },
// ]);

// db.Artists.insertMany([
//   {
//     name: "Artist A",
//     dateOfBirth: "1980-05-12",
//     genres: ["Pop", "R&B"],
//   },
//   {
//     name: "Artist B",
//     dateOfBirth: "1985-09-20",
//     genres: ["Rock", "Alternative"],
//   },
//   {
//     name: "Artist C",
//     dateOfBirth: "1992-03-08",
//     genres: ["Hip-Hop", "Rap"],
//   },
//   {
//     name: "Artist D",
//     dateOfBirth: "1977-11-04",
//     genres: ["Pop", "Dance"],
//   },
//   {
//     name: "Artist E",
//     dateOfBirth: "1990-12-30",
//     genres: ["Country", "Folk"],
//   },
//   {
//     name: "Artist F",
//     dateOfBirth: "1988-07-15",
//     genres: ["Rock", "Indie"],
//   },
//   {
//     name: "Artist G",
//     dateOfBirth: "1983-06-22",
//     genres: ["Electronic", "EDM"],
//   },
//   {
//     name: "Artist H",
//     dateOfBirth: "1995-02-18",
//     genres: ["R&B", "Soul"],
//   },
//   {
//     name: "Artist I",
//     dateOfBirth: "1975-10-10",
//     genres: ["Blues", "Jazz"],
//   },
//   {
//     name: "Artist J",
//     dateOfBirth: "1998-04-25",
//     genres: ["Pop", "Electropop"],
//   },
// ]);

// db.PopularSongs.insertMany([
//   {
//     title: "Popular Song 1",
//     playCount: 15000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 2",
//     playCount: 12000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 3",
//     playCount: 9000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 4",
//     playCount: 8000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 5",
//     playCount: 7000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 6",
//     playCount: 6000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 7",
//     playCount: 5500,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 8",
//     playCount: 5000,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 9",
//     playCount: 4500,
//     period: "July 2023",
//   },
//   {
//     title: "Popular Song 10",
//     playCount: 4000,
//     period: "July 2023",
//   },
// ]);
