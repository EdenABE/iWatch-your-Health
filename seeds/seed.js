const sequelize = require('../config/connection');
const { User, Screening } = require('../models');

const userData = require('./userData.json');
const screeningData = require('./screeningData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

for (let i=0; i< userData.length; i++) {
  const user = userData[i];
  await User.create(user);
}


  await Screening.bulkCreate(screeningData);

  process.exit(0);
};

seedDatabase();
