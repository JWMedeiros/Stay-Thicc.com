const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weekday: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    workout_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;