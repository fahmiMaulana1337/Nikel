'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Rent, { foreignKey: 'UserId' })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Username is required'
        },
        notNull:{
          msg: 'Username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Password is required'
        },
        notNull:{
          msg: 'Password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Role is required'
        },
        notNull:{
          msg: 'Role is required'
        }
      }
    },
    departement:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Department is required'
        },
        notNull:{
          msg: 'Department is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};