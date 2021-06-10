const { Project } = require('../models');

const projectData =
[
  {
    "project_name": "Web Worker Campaign 1",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 1,
  },
  {
    "project_name": "Woolworths Delivery Services Eastlakes",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
  {
    "project_name": "Woolworths Delivery Services Balmain",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
  {
    "project_name": "Woolworths Delivery Services WPH",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
