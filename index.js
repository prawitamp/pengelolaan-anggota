const express = require("express");
const cors = require("cors");
require("dotenv").config();

const communityRoutes = require("./src/routes/communityRoute.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Community Member!");
});
app.use("/api/community", communityRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




