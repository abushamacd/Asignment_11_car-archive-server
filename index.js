const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Car Archive sever running");
});

app.listen(port, () => {
  console.log(`Car Archive on port ${port}`);
});
