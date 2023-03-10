'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContentType.hasMany(models.Entry, {
        foreignKey: 'contentTypeId',
      });
    }
  }
  ContentType.init(
    {
      name: DataTypes.STRING,
      fields: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      modelName: 'ContentType',
    }
  );
  return ContentType;
};
