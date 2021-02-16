'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Course, {through: 'StudentCourse'})
      Student.belongsToMany(models.Assigment, {through: 'Delivery'})
    }
  };
  Student.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "name required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email has already registered"
      },
      validate: {
        notEmpty: {
          msg: "Email required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};