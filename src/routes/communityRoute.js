const express = require("express");
const upload = require("../middleware/multerConfig.js", "../middleware/uploadFile.js");
const {
  createCommunitymember,
  //   getAllCommunity,
  //   getCommunityById,
  //   updateCommunityById,
  //   deleteCommunityById,
} = require("../controllers/communityController.js");

const router = express.Router();

router.post("/", upload.single("image"), createCommunitymember);

// router.get("/getAllCommunity", getAllCommunity);
// router.get("/getCommunityById/:id", getCommunityById);
// router.post("/updateCommunityById/:id", updateCommunityById);
// router.post("/deleteCommunityById/", deleteCommunityById);

// router.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome in Community Members!",
//   });
// });

module.exports = router;

// // Definisikan rute
// router.post('/createCommunitymember', upload.single('image'), createCommunitymember);
