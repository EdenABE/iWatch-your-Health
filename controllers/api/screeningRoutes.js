const router = require('express').Router();
const { Screening } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newScreening = await Screening.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newScreening);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const screeningData = await Screening.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!screeningData) {
      res.status(404).json({ message: 'No Screening information found with this id!' });
      return;
    }

    res.status(200).json(screeningData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
