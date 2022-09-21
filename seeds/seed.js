const sequelize = require('../config/connection');
const { User, Screening } = require('../models');

const userData = require('./userData.json');
const screeningData = require('./screeningData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Screening.bulkCreate(screeningData);
  await User.bulkCreate(userData);

  process.exit(0);
};

seedDatabase();
