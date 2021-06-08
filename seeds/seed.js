const seedUsers = require('./user');
const seedProjects = require('./project');
const seedItems = require('./item');
const seedProjectItems = require('./projectItem');
const seedCampaigns = require('./campaign');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedProjects();
    console.log('\n----- PROJECTS SEEDED -----\n');

  await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

  await seedProjectItems();
  console.log('\n----- PROJECT ITEMS SEEDED -----\n');

  await seedCampaigns();
  console.log('\n----- PROJECT ITEMS SEEDED -----\n');


  process.exit(0);
};

seedDatabase();
