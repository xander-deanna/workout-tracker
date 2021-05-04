const router = require("express").Router();
const Workout = require("../models/workout.js");

// creates a new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// updates a workout
router.put('/workouts/:id', async ({ params, body }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body
      }
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;