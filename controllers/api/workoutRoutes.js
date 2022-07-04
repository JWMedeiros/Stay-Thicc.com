const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

router.post('/', withAuth, async (req, res) => {
  try {
    await Workout.create({
      name: req.body.name,
      weekday: req.body.weekday,
      type: req.body.type,
      workout_weight: req.body.type,
      reps: req.body.reps,
      sets: req.body.sets,
      user_id: req.session.userId,
    });
    const workoutData = await Workout.findAll({});

    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('workout', {
      workouts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    //Destroy specified workout
    //let result=
    await Workout.destroy({
      where:{
        id:req.params.id,
      },
    });
    // if (result<){

    // }

    // Get all workouts
    const workoutData = await Workout.findAll({});

    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('workout', {
      workouts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    await Workout.update({
      name: req.body.name,
      weekday: req.body.weekday,
      type: req.body.type,
      workout_weight: req.body.type,
      reps: req.body.reps,
      sets: req.body.sets,
    },
    {
      where:{
        id:req.params.id,
      }
    });
    // Get all workouts
    const workoutData = await Workout.findAll({});

    // Serialize data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('workout', {
      workouts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
