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
        allowNull: false,
    },
    total_visitors: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fb_clicks: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ig_clicks: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    projectID: {
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