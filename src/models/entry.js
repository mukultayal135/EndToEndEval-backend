'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entry.belongsTo(models.ContentType, {
        foreignKey: 'contentTypeId',
      });
    }
  }
  Entry.init(
    {
      contentTypeId: DataTypes.INTEGER,
      value: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: 'Entry',
    }
  );
  return Entry;
};
