const User = require('./User');
const Workout = require('./Workout');
const Location = require('./Location');


//User can have many Workouts
User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Workout.belongsTo(User, {
  foreignKey:'user_id',
});

module.exports = { User, Location, Workout};