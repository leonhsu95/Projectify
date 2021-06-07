const { ProjectItem } = require('../models');

const projectItemData =
[
  {
    "projectID": 1,
    "itemID": [1,2,3]
  },
]

const seedprojectItems = () => ProjectItem.bulkCreate(projectItemData);

module.exports = seedprojectItems;
