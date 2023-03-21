'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.hasMany(models.Rent, { foreignKey: 'VehicleId' })
    }
  }
  Vehicle.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Name is required'
        },
        notNull:{
          msg: 'Name is required'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Type is required'
        },
        notNull:{
          msg: 'Type is required'
        }
      }
    },
    category:  {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'Type is required'
        },
        notNull:{
          msg: 'Type is required'
        }
      }
    },
    bbmConsume:  {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: 'BBM Consume is required'
        },
        notNull:{
          msg: 'BBM Consume is required'
        }
      }
    },
    serviceDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};