const { Location } = require('../models');

const locationData = [
  {
    name: 'Fitness Buzz',
    city: 'Mississauga',
    address: '2341 Brant Street',
  },
  {
    name: 'Habit Fitness',
    city: 'Mississauga',
    address: '42 Wallaby Way',
  },
  {
    name: 'Hardcore Fitness',
    city: 'Oakville',
    address: '234 Fit Street',
  },
  {
    name: 'Legends Gym',
    city: 'Oakville',
    address: '99 Wayne Street',
  },
  {
    name: 'Hardy Fitness',
    city: 'Burlington',
    address: '1020 Patrick Street',
  },
  {
    name: 'Hooks Gym',
    city: 'Burlington',
    address: '1123 Java Street',
  },
  {
    name: 'Thicc Gym',
    city: 'Burlington',
    address: '4123 Grove Street',
  },
  {
    name: 'Johns Gym',
    city: 'Toronto',
    address: '1902 John Street',
  },
  {
    name: 'Wingkys Gym',
    city: 'Toronto',
    address: '8931 Wingky Street',
  },
  {
    name: 'Fitasticle',
    city: 'Toronto',
    address: '78 Victoria Road',
  },
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
