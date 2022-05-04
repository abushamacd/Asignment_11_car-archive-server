const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eehys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("DB Connected");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Car Archive sever running");
});

app.listen(port, () => {
  console.log(`Car Archive on port ${port}`);
});
