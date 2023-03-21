'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rent.belongsTo(models.Vehicle, { foreignKey: 'VehicleId' })
      Rent.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  }
  Rent.init({
    VehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Vehicles',
        key: 'id'
      },
      validate: {
        notEmpty: {
          msg: 'VehicleId is required'
        },
        notNull: {
          msg: 'VehicleId is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Users',
        key: 'id'
      },
      validate: {
        notEmpty: {
          msg: 'UserId is required'
        },
        notNull: {
          msg: 'UserId is required'
        }
    },
  },
    driver: DataTypes.STRING,
    status: DataTypes.STRING,
    loanDate: DataTypes.DATE,
    loanDeadline: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};