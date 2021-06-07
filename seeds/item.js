const { Item } = require('../models');

const itemData =
[
  {
    "item_type": "Landing Page",
    "price": 10000,
  },
  {
    "item_type": "Facebook Ad",
    "price": 5000,
  },
  {
    "item_type": "Instagram Ad",
    "price": 2500,
  },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
