const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const imagekit = require("../config/imagekitConfig.js");

// Create Community Member
const createCommunitymember = async (req, res) => {
  const {
    name_member,
    placeOfBirth,
    dateOfBirth,
    address,
    phoneNumber,
    hobbies,
  } = req.body;
  const file = req.file;
  
  try {
    let imageUrl = "";

    if (file) {
      const uploadResponse = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
      });

      imageUrl = uploadResponse.url;
    }

    // Save community with image URL
    const community = await prisma.community.create({
      data: {
        name_member,
        placeOfBirth,
        dateOfBirth,
        address,
        phoneNumber,
        hobbies,
        photo: imageUrl,
      },
    });

    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ error: "Failed to create community member" });
  }
};

module.exports = {
  createCommunitymember,
  //   getAllCommunity,
  //   getCommunityById,
  //   updateCommunityById,
  //   deleteCommunityById,
};
