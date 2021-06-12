const { User } = require('../models');

const userData =
[
  {
    "firstname": "Leon",
    "lastname": "Hsu",
    "email": "leonhsu95@gmail.com",
    "phone": "0433654456",
    "company": "Web Workers",
    "abn": "26381531358",
    "address": "1 Alleyway Avenue, West Pennant Hills NSW 2125",
    "password": "admin"
  },
  {
    "firstname": "Bob",
    "lastname": "Parkins",
    "email": "bparkins@woolworthsgroup.com",
    "phone": "0486545654",
    "company": "Woolworths Group",
    "abn": "88000014675",
    "address": "1 Woolworths Way, Bella Vista NSW 2153",
    "password": "WowPW1"
  },
]

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
