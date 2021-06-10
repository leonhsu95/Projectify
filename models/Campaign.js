const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Campaign extends Model {}

Campaign.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    unique_visitors: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    total_visitors: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    fb_clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    fb_registered: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    ig_registered: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ig_clicks: {
      type: DataTypes.INTEGER,
      defaultValue: 0
  },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'project',
            key: 'id'
          }
    },   
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'campaign',
  } 
);

module.exports = Campaign;