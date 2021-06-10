const { ProjectItem } = require('../models');

const projectItemData =
[
  {
    "project_id": 1,
    "item_id": 1
  },
  {
    "project_id": 1,
    "item_id": 2
  },
  {
    "project_id": 1,
    "item_id": 3
  },
  {
    "project_id": 2,
    "item_id": 1
  },
  {
    "project_id": 2,
    "item_id": 2
  },
  {
    "project_id": 2,
    "item_id": 3
  },
  {
    "project_id": 3,
    "item_id": 1
  },
  {
    "project_id": 3,
    "item_id": 2
  },
  {
    "project_id": 3,
    "item_id": 3
  },
  {
    "project_id": 4,
    "item_id": 1
  },
  {
    "project_id": 4,
    "item_id": 2
  },
  {
    "project_id": 4,
    "item_id": 3
  },
]

const seedprojectItems = () => ProjectItem.bulkCreate(projectItemData);

module.exports = seedprojectItems;
