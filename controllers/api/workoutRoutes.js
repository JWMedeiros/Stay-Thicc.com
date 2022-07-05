const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    Workout.create({
      name: req.body.name,
      weekday: req.body.weekday,
      type: req.body.type,
      workout_weight: req.body.workout_weight,
      reps: req.body.reps,
      sets: req.body.sets,
      user_id: req.session.userId,
    });
    console.log('WORKOUT CREATED');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    //Destroy specified workout
    //let result=
    await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put("/:id", withAuth, (req, res) => {
//   Workout.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(affectedRows => {
//       if (affectedRows > 0) {
//         res.status(200).end();
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });


// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     Workout.update({
//       name: req.body.name,
//       weekday: req.body.weekday,
//       type: req.body.type,
//       workout_weight: req.body.type,
//       reps: req.body.reps,
//       sets: req.body.sets,
//     },
//       {
//         where: {
//           id: req.params.id,
//         }
//       })
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No Workout found with this id' });
//           return;
//         }
//         res.json(dbUserData);
//       });


// // Get all workouts
// const workoutData = await Workout.findAll({});

// // Serialize data so the template can read it
// const workouts = workoutData.map((workout) => workout.get({ plain: true }));

// // Pass serialized data and session flag into template
// res.render('workout', {
//   workouts,
//   loggedIn: req.session.loggedIn,
// });
//   } catch (err) {
//   res.status(500).json(err);
// }
// });

module.exports = router
