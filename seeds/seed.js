const seedLocations = require('./locationData');
const seedWorkouts = require('./workoutData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await seedLocations();
  await seedWorkouts();
  await seedUsers();
};

seedAll();
