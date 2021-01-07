const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.get("/api/exercise", (req, res) => {
  Exercise.find({})
    .sort({ name: -1 })
    .then(() => {
      res.json();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/stats", (req, res) => {});

module.exports = router;
