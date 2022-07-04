const seedLocations = require('./locationData');
//const seedWorkouts = require('./workoutData');
//const seedUsers = require('./userData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  //await seedUsers().catch(err=>console.log('\n\n\n\n\n'+err));
  await seedLocations().catch(err=>console.log('\n\n\n\n\n'+err));
  //await seedWorkouts().catch(err=>console.log('\n\n\n\n\n'+err));
};


seedAll();
