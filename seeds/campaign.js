const { Campaign } = require('../models');

const campaignData =
[
  {
    "unique_visitors": 1000,
    "total_visitors": 1500,
    "fb_clicks": 2000,
    "fb_registered": 30,
    "ig_clicks": 2500,
    "ig_registered": 40,
    "project_id": 1,
  },
  {
    "unique_visitors": 1500,
    "total_visitors": 2100,
    "fb_clicks": 3000,
    "fb_registered": 50,
    "ig_clicks": 2700,
    "ig_registered": 55,
    "project_id": 1,
  },
  {
    "unique_visitors": 2200,
    "total_visitors": 2500,
    "fb_clicks": 3200,
    "fb_registered": 60,
    "ig_clicks": 2300,
    "ig_registered": 63,
    "project_id": 1,
  },
  {
    "unique_visitors": 950,
    "total_visitors": 1000,
    "fb_clicks": 200,
    "fb_registered": 60,
    "ig_clicks": 300,
    "ig_registered": 40,
    "project_id": 2,
  },
  {
    "unique_visitors": 1700,
    "total_visitors": 2000,
    "fb_clicks": 350,
    "fb_registered": 10,
    "ig_clicks": 150,
    "ig_registered": 40,
    "project_id": 3,
  },
  {
    "unique_visitors": 1200,
    "total_visitors": 1500,
    "fb_clicks": 340,
    "fb_registered": 15,
    "ig_clicks": 260,
    "ig_registered": 15,
    "project_id": 4,
  },
]

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
