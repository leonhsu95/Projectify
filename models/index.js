const User = require('./User');
const Item = require('./Item');
const Project = require('./Project');
const ProjectItem = require('./ProjectItem');
const Campaign = require('./Campaign');

User.hasMany(Project, {
  foreignKey: 'projectID',

});

Project.belongsTo(User, {
  foreignKey: 'userID',

});

// Projects belongToMany Items (through ProjectItem)
Project.belongsToMany(Item, {
  through: ProjectItem,
  foreignKey: 'projectID',
});

// Items belongToMany Projects (through ProjectItem)
Item.belongsToMany(Project, {
  through: ProjectItem,
  foreignKey: 'itemID',
});


Project.hasMany(Campaign, {
  foreignKey: 'projectID',
 
});

Campaign.belongsTo(Project, {
  foreignKey: 'projectID',

});

module.exports = { User, Item, Project, ProjectItem, Campaign};