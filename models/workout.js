const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Choose an exercise"
                },
            name: {
                type: String,
                required: "Please name your exercise"
            },
            duration: {
                type: Number,
                required: "Choose a duration"             
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;