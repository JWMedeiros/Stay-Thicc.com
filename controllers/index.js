const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes')

router.use('/api', apiRoutes);
router.use('/login',loginRoutes);
router.use('/signup',signUpRoutes);

module.exports = router;