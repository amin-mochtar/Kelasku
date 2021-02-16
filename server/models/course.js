'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Professor)
      Course.hasMany(models.Assigment)
      Course.belongsToMany(models.Student, {through: 'StudentCourse'})
    }
  };
  Course.init({
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
          msg: "Description required"
        }
      }
    },
    ProfessorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};