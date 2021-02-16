'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assigment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assigment.belongsTo(models.Course)
      Assigment.belongsToMany(models.Student, {through: 'Delivery'})
    }
  };
  Assigment.init({
    name: {
      type: DataTypes.STRING,
      unique: {
        msg: "name already exist"
      },
      validate: {
        notEmpty: {
          msg: "name required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "description required"
        }
      }
    },
    file: DataTypes.STRING,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Assigment',
  });
  return Assigment;
};