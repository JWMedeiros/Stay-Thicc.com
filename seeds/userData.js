const { User } = require('../models');

const userData = [
  {
    email: 'patrick@gmail.com',
    password: '12345678',
    first_name: 'Patrick',
    last_name: 'Ross',
    user_weight: 100,
  },
  {
    email: 'wingky@gmail.com',
    password: '12345678',
    first_name: 'Wingky',
    last_name: 'Liang',
    user_weight: 100,
  },
  {
    email: 'john@gmail.com',
    password: '12345678',
    first_name: 'John',
    last_name: 'Medeiros',
    user_weight: 100,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
