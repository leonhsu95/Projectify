const { Project } = require('../models');

const projectData =
[
  {
    "project_name": "Web Workers Campaign 1",
    "description": "First Campaign for Web Workers",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 1,
  },
  {
    "project_name": "Woolworths Delivery Services Eastlakes",
    "description": "Woolworths Eastlakes offers their customers same-day and on-demand delivery options. This campaign drives new customers to the Eastlakes delivery service.",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
  {
    "project_name": "Woolworths Delivery Services Balmain",
    "description": "Woolworths Balmain offers their customers same-day and on-demand delivery options. This campaign drives new customers to the Balmain delivery service.",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
  {
    "project_name": "Woolworths Delivery Services West Pennant Hills",
    "description": "Woolworths WPH offers their customers same-day and on-demand delivery options. This campaign drives new customers to the WPH delivery service.",
    "start_date": 2021/06/01,
    "end_date": 2021/06/31,
    "active": true,
    "user_id": 2,
  },
]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
