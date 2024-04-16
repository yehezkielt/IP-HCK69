'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Shoes, {foreignkeys: "ShoesId"})
      Order.belongsTo(models.User, {foreignkeys: "UserId"})
    }
  }
  Order.init({
    UserId: {
        type: DataTypes.INTEGER,
        allowNull : false,
        validate : {
            notNull : {
                msg: "UserId is required"
            },
            notEmpty : {
                msg: 'UserId is required'
            }
        }
    },
    ShoesId: {
        type: DataTypes.INTEGER,
        allowNull : false,
        validate : {
            notNull : {
                msg: "ShoesId is required"
            },
            notEmpty : {
                msg: 'ShoesId is required'
            }
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};