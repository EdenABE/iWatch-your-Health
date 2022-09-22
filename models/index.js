const User = require('./User');
const Screening = require('./screening');

User.hasMany(Screening, {
    foreignKey: 'user_id',

});

Screening.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Screening };
