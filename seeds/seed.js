const sequelize = require('../config/connection');
const { User, Screening } = require('../models');

const userData = require('./userData.json');
const screeningData = require('./screeningData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Screening of screeningData) {
    await Screening.create({
      ...Screening,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
