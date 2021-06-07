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
]

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
