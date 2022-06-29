const { User } = require("../models");

const userData = [
    {
        id: 1,
        email: "patrick@gmail.com",
        password: "12345678",
        first_name: "Patrick",
        last_name: "Ross",
        user_weight: 100,
    },
    {
        id: 2,
        email: "wingky@gmail.com",
        password: "12345678",
        first_name: "Wingky",
        last_name: "Liang",
        user_weight: 100,
    },
    {
        id: 3,
        email: "john@gmail.com",
        password: "12345678",
        first_name: "John",
        last_name: "Medeiros",
        user_weight: 100,
    },
];


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;