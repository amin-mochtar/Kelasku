'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      Delivery.belongsTo(models.Student, { foreignKey: 'StudentId', sourceKey: 'id' })
      Delivery.belongsTo(models.Assigment, { foreignKey: 'AssignmentId', sourceKey: 'id' })
    }
  };
  Delivery.init({
    file: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "file required"
        }
      }
    },
    filename: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "filename required"
        }
      }
    },
    AssignmentId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};