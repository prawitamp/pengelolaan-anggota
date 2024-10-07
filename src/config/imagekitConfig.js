const ImageKit = require("imagekit");

// ImageKit Configuration
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Fungsi upload file
const uploadFile = (file) => {
  imagekit.upload(
    {
      file: file, // Gambar atau file yang diunggah
      fileName: "photo.jpg", // Nama file
      folder: "/pengelolaan-anggota", // Folder tujuan di ImageKit
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};

module.exports = { imagekit, uploadFile };
