const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Screening extends Model {}

Screening.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    min_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isMale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isFemale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    needed_screening: {
      type: DataTypes.TEXT,
    },
    needed_vaccination: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Screening',
  }
);

module.exports = Screening;
