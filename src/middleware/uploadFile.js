// const express = require("express");
// const multer = require("multer");
// const { uploadFile } = require("./src/config/imagekitConfig");

// const app = express();
// const upload = multer({ storage: multer.memoryStorage() }); // Gunakan memoryStorage untuk mendapatkan file dalam buffer

// app.post("/upload", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }
//   uploadFile(req.file.buffer); // Menggunakan buffer file yang diunggah
//   res.send("File uploaded successfully");
// });
