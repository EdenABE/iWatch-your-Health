const router = require('express').Router();
const { Screening, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth ,async (req, res) => {
  try {
    // Get all Screenings and JOSIN with user data
    const screeningData = await Screening.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const screenings = screeningData.map((Screening) => Screening.get({ plain: true }));
    console.log(screenings);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      screenings,
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
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Screening }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
