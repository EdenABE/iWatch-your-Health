const sequelize = require('../config/connection');
const { User, Screening } = require('../models');

const userData = require('./userData.json');
const screeningData = require('./screeningData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Screening.bulkCreate(screeningData);

  process.exit(0);
};

seedDatabase();
