const { Project } = require('../models');

const projectData =
[
  {
    "project_name": "Web Worker Campaign 1",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "userID": 1,
  },
]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
