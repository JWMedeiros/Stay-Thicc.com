const { Workout } = require("../models");

const workoutData = [
    {
        weekday: "Monday",
        type: "Chest",
        name: "Bench Press",
        workout_weight: 160,
        sets: 3,
        reps: 8,
    },
    {
        weekday: "Monday",
        type: "Bicep",
        name: "Hammer Curls",
        workout_weight: 50,
        sets: 3,
        reps: 12,
    },
    {
        weekday: "Tuesday",
        type: "Back",
        name: "Deadlift",
        workout_weight: 200,
        sets: 4,
        reps: 8,
    },
    {
        weekday: "Tuesday",
        type: "Tricep", 
        name: "Tricep Pulldown",
        workout_weight: 80,
        sets: 3,
        reps: 12,
    },
    {
        weekday: "Wednesday",
        type: "Legs", 
        name: "Squats",
        workout_weight: 220,
        sets: 3,
        reps: 8,
    },
    {
        weekday: "Wednesday",
        type: "Legs", 
        name: "Leg Press",
        workout_weight: 200,
        sets: 3,
        reps: 8,
    },
    {
        weekday: "Thursday",
        type: "Chest", 
        name: "Bench Press",
        workout_weight: 100,
        sets: 3,
        reps: 8,
    },
    {
        weekday: "Thursday",
        type: "Bicep", 
        name: "Military Press",
        workout_weight: 40,
        sets: 3,
        reps: 12,
    },
    {
        weekday: "Friday",
        type: "Back", 
        name: "Seated Rows",
        workout_weight: 80,
        sets: 3,
        reps: 12,
    },
    {
        weekday: "Friday",
        type: "Tricep", 
        name: "Face Pulls",
        workout_weight: 60,
        sets: 3,
        reps: 12,
    },
];


const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;