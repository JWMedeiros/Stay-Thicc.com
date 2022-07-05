const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Workout } = require('../models');
const { Location } = require('../models');

router.get('/', (req, res) => {
  res.render('landing');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/workout', withAuth, async (req, res) => {
  try {
    // Get all workouts
    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.userId,
      },
    });

    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) =>
      workout.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('workout', {
      workouts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addWorkout',(req,res)=>{
  res.render('workForm',{
    loggedIn: req.session.loggedIn,
  });
});

router.get('/changeWorkout',(req,res)=>{
  res.render('changeForm',{
    loggedIn: req.session.loggedIn,
    id:req.session.id,
  });
});

router.get('/location', withAuth, async (req, res) => {
  try {
    // Get all locations
    const locationData = await Location.findAll({});

    // Serialize data so the template can read it
    const locations = locationData.map((location) =>
      location.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('location', {
      locations,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
