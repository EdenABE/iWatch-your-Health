const User = require('./User');
const Screening = require('./screening');

User.hasOne(Screening, {
  foreignKey: 'user_id',
});

Screening.hasMany(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Screening };
