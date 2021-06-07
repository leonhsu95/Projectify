const { User } = require('../models');

const userData =
[
  {
    "firstname": "Leon",
    "lastname": "Hsu",
    "email": "leonhsu95@gmail.com",
    "phone": "0433659968",
    "company": "Web Workers",
    "abn": "26381531358",
    "address": "1 Alleyway Avenue, West Pennant Hills NSW 2125",
    "password": "admin"
  },
  {
    "firstname": "Test",
    "lastname": "User",
    "email": "admin@email.com",
    "phone": "0433659968",
    "company": "Tests R Us",
    "abn": "26381231358",
    "address": "2 Alleyway Avenue, West Pennant Hills NSW 2125",
    "password": "password"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
