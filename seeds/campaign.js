const { Campaign } = require('../models');

const campaignData =
[
  {
    "unique_visitors": 1000,
    "total_visitors": 1500,
    "fb_clicks": 2000,
    "ig_clicks": 2500,
    "projectID": 1,
  },
  {
    "unique_visitors": 1500,
    "total_visitors": 2100,
    "fb_clicks": 3000,
    "ig_clicks": 2700,
    "projectID": 1,
  },
  {
    "unique_visitors": 2200,
    "total_visitors": 2500,
    "fb_clicks": 3200,
    "ig_clicks": 2300,
    "projectID": 1,
  },
]

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
