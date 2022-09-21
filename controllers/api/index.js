const router = require('express').Router();
const userRoutes = require('./userRoutes');
const screeningRoutes = require('./screeningRoutes');

router.use('/users', userRoutes);
router.use('/screenings', screeningRoutes);

module.exports = router;
