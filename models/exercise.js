const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the exercise name",
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter the exercise duration",
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
});

// db.workouts.aggregate([
//   {
//     $addFields: {
//       totalWeight: { $sum: "" },
//       totalDuration: { $sum: "" },
//     },
//   },
// ]);

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
