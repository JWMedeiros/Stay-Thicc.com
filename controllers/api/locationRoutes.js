//Notes for what needs doing:
//Needs Get all Locations, get locations by city, get locations by name, get current location based off user ID, Send all get reqs to handlebars to display
const router = require('express').Router();
const { Location} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

router.get('/:city', withAuth, async (req, res) => {
  try {
    // Get all locations with passed City Name
    const locationData = await Location.findAll({
      where: {
        city: req.params.city,
      },
    });

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

//If time permits->
// router.get('/mylocation', withAuth, async (req, res) => {
//   try {
//     // Get location for user
//     const locationData = await User.findByPk(req.session.userId, {
//       attributes: {
//         exclude: [
//           'password',
//           'id',
//           'email',
//           'first_name',
//           'last_name',
//           'user_weight',
//         ],
//       },
//       include: [{ model: Location }],
//     });

//     // Serialize data so the template can read it
//     const locations = locationData.map((location) =>
//       location.get({ plain: true })
//     );

//     // Pass serialized data and session flag into template
//     res.render('location', {
//       locations,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;