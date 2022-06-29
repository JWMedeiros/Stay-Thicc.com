const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/location', locationRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;