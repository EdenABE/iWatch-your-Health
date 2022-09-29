const router = require('express').Router();
const { Screening, User } = require('../models');
const withAuth = require('../utils/auth');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
  res.render('landing');
});

router.get('/profile', withAuth, async (req, res) => {
  // try {
  // Find the logged in user based on the session ID
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
    // include: [{ model: Screening, where: {} }],
  });
  const user = userData.get({ plain: true });
  const screenings = await sequelize.query(
    'select * from screening where :age >= min_age and :age <= max_age',
    {
      replacements: { age: user.age },
      type: QueryTypes.SELECT,
    }
  );
  user.Screenings = screenings;

  console.log(screenings);

  console.log(user);
  res.render('homepage', {
    ...user,
    logged_in: true,
  });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

// router.get('/login', (req, res) => {
//   res.render('login');
// });

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/landing', (req, res) => {
  res.render('landing');
});

router.get('/logout', (req, res) => {
  res.render('landing');
});
module.exports = router;
