const User = require('./User');
const Workout = require('./Workout');
const Location = require('./Location');

//User belongsTo Location
Location.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasOne(Location, {
  foreignKey: 'user_id',
});

//Locations have many Users
User.hasMany(Workout, {
  foreignKey: 'user_id',
});

Workout.belongsTo(User, {
  foreignKey:'user_id',
});

module.exports = { User, Location, Workout};