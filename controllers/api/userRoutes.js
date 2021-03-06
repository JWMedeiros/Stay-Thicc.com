const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    user_weight: req.body.user_weight,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.userId = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      console.log('invalid user ID');
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    console.log('User Found');
    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.delete('/user/:id', (req, res) => {
//   User.destroy({
//     where: {
//       email: req.params.email,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;