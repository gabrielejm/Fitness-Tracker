const express = require("express");
const mongojs = require("mongojs");

const app = express();
const PORT = process.env.PORT || 3000;

const db = mongojs(databaseUrl, collections);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
