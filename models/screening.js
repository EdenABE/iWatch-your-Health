const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Screening extends Model {}

Screening.init(
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
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Sex: {
      type: DataTypes.ENUM,
      values: ['M', 'F'],
    },
    needed_screening: {
      type: DataTypes.STRING,
    },
    needed_vaccination: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
    modelName: 'Screening',
  }
);

module.exports = Screening;
