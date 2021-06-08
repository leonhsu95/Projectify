const { ProjectItem } = require('../models');

const projectItemData =
[
  {
    "projectID": 1,
    "itemID": 1
  },
  {
    "projectID": 1,
    "itemID": 2
  },
  {
    "projectID": 1,
    "itemID": 3
  },
]

const seedprojectItems = () => ProjectItem.bulkCreate(projectItemData);

module.exports = seedprojectItems;
