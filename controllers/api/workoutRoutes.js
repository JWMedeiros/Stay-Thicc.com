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
    await Workout.destroy({
      where:{
        id:req.params.id.slice(1),
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  let num=parseInt(req.params.id.slice(1));
  console.log('\n'+num+'\n');
  console.log(typeof(num));
  try {
    Workout.update({
      name: req.body.name,
      weekday: req.body.weekday,
      type: req.body.type,
      workout_weight: parseInt(req.body.workout_weight),
      reps: parseInt(req.body.reps),
      sets: parseInt(req.body.sets),
    },
    {
      where:{
        id:num,
      }
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No Workout found with this id' });
          return;
        }
        res.json(dbUserData);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/changeWorkout/:id',withAuth,async (req,res)=>{
  console.log('Inside Change Workout! ID');
  console.log(req.params.id.slice(1));
  res.render('changeForm',{
    loggedIn:req.session.loggedIn,
    id:parseInt(req.params.id.slice(1)),
  });
});

module.exports = router;
