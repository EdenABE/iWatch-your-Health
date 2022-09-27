const router = require('express').Router();
const { Screening, User } = require('../models');
const withAuth = require('../utils/auth');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection');

router.get('/homepage', withAuth ,async (req, res) => {
  res.render('homepage', {
    // screenings,
    logged_in: req.session.logged_in,
  });

 return;
  try {
    // Get all Screenings and JOSN with user data

    // const screeningData = await Screening.findOne({
    //   include: [
    //     {
    //       model: User,
    //       attribute: [
    //         "name",
    //         "age",
    //         "sex"
    //       ]
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const screenings = screeningData.map((Screening) => Screening.get({ plain: true }));
    // console.log(screenings);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      // screenings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/screening/:id', async (req, res) => {
  try {
    const screeningData = await screening.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const screening = screeningData.get({ plain: true });

    res.render('screening', {
      ...screening,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
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
        type: QueryTypes.SELECT
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


router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;
