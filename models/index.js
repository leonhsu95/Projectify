const User = require('./User');
const Item = require('./Item');
const Project = require('./Project');
const ProjectItem = require('./ProjectItem');
const Campaign = require('./Campaign');

User.hasMany(Project, {
  foreignKey: 'user_id',

});

Project.belongsTo(User, {
  foreignKey: 'user_id',

});

// Projects belongToMany Items (through ProjectItem)
Project.belongsToMany(Item, {
  through: ProjectItem,
  foreignKey: 'project_id',
});

// Items belongToMany Projects (through ProjectItem)
Item.belongsToMany(Project, {
  through: ProjectItem,
  foreignKey: 'item_id',
});


Project.hasMany(Campaign, {
  foreignKey: 'project_id',
 
});

Campaign.belongsTo(Project, {
  foreignKey: 'project_id',

});

module.exports = { User, Item, Project, ProjectItem, Campaign};