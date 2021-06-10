const { ProjectItem } = require('../models');

const projectItemData =
[
  {
    "projectID": 1,
    "item_id": 1
  },
  {
    "projectID": 1,
    "item_id": 2
  },
  {
    "projectID": 1,
    "item_id": 3
  },
]

const seedprojectItems = () => ProjectItem.bulkCreate(projectItemData);

module.exports = seedprojectItems;
