const User = require('./User');
const Screening = require('./Screening');

User.hasMany(Screening, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Screening.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Screening };
