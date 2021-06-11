const { Item } = require('../models');

const itemData =
[
  {
    "item_type": "Landing Page",
    "price": 5000,
  },
  {
    "item_type": "Facebook Ad",
    "price": 1000,
  },
  {
    "item_type": "Instagram Ad",
    "price": 1000,
  },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
