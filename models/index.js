const User = require('./User');
const Workout = require('./Workout');
const UserWorkout = require('./UserWorkout');
const Location = require('./Location');

//User belongsTo Location
User.belongsTo(Location, {
    foreignKey: 'location_id',
});
  
//Locations have many Users
Location.hasMany(User, {
    foreignKey: 'location_id',
});

User.belongsToMany(Workout, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserWorkout,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'planned_workouts'
});

Workout.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserWorkout,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_workouts'
});

module.exports = { User, Location, Workout, UserWorkout };