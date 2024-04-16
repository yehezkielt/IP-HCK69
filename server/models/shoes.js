"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shoes.belongsTo(models.User, { foreignKey: "UserId" });
      Shoes.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Shoes.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "name is required",
          },
          notEmpty: {
            msg: "name is required",
          },
        },
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "price is required",
          },
          notEmpty: {
            msg: "price is required",
          },
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "img is required",
          },
          notEmpty: {
            msg: "img is required",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "quantity is required",
          },
          notEmpty: {
            msg: "quantity is required",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ID User is required",
          },
          notEmpty: {
            msg: "ID User is required",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ID Category is required",
          },
          notEmpty: {
            msg: "ID Category is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Shoes",
    }
  );
  return Shoes;
};
