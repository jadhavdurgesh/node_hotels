const mongoose = require('mongoose');
require('dotenv').config();


// define mongodb connection url
// const mongoUrl = "mongodb://localhost:27017/motels";
const mongoUrl = process.env.Db_Url;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("we are connected");
});
db.on("error", () => {
  console.log("we have error");
});
db.on("disconnected", () => {
  console.log("we are disconnected");
});

module.exports = db;