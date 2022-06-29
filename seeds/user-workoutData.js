const { UserWorkout } = require('../models');

const userWorkoutData = [
  {
    user_id: 1,
    workout_id: 1,
  },
  {
    user_id: 1,
    workout_id: 2,
  },
  {
    user_id: 2,
    workout_id: 3,
  },
  {
    user_id: 2,
    workout_id: 4,
  },
  {
    user_id: 3,
    workout_id: 5,
  },
  {
    user_id: 3,
    workout_id: 6,
  },
 
];

const seedUserWorkouts = () => UserWorkout.bulkCreate(userWorkoutData);

module.exports = seedUserWorkouts;