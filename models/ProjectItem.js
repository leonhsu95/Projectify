const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProjectItem extends Model {}

ProjectItem.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project_item',
  }
);

module.exports = ProjectItem;
