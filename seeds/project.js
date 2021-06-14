const { Project } = require("../models");

const projectData = [
  {
    project_name: "Web Workers Campaign 1",
    project_description:
      "Web Worker  offers their customers a web update service. This campaign drives new customers to sign-up with Web Workers",
    start_date: 2021 / 06 / 01,
    end_date: 2021 / 06 / 31,
    active: true,
    user_id: 1,
  },
  {
    project_name: "Woolworths Delivery Services Eastlakes",
    project_description:
      "Woolworths Eastlakes offers their customers same-day and on-demand delivery options. This campaign drives new customers to the Eastlakes delivery service.",
    start_date: 2021 / 06 / 01,
    end_date: 2021 / 06 / 31,
    active: true,
    user_id: 2,
  },
  {
    project_name: "Woolworths Delivery Services Balmain",
    project_description:
      "Woolworths Balmain offers their customers same-day and on-demand delivery options. This campaign drives new customers to the Balmain delivery service.",
    start_date: 2021 / 06 / 01,
    end_date: 2021 / 06 / 31,
    active: true,
    user_id: 2,
  },
  {
    project_name: "Woolworths Delivery Services WPH",
    project_description:
      "Woolworths West Pennant Hills offers their customers same-day and on-demand delivery options. This campaign drives new customers to the West Pennant Hills delivery service.",
    start_date: 2021 / 06 / 01,
    end_date: 2021 / 06 / 31,
    active: true,
    user_id: 2,
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
