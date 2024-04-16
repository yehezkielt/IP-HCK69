'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shoes.hasMany(models.Order, {foreignKey: "ShoesId"})
    }
  }
  Shoes.init({
    name: {
        type: DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg: "name is required"
            },
            notEmpty : {
                msg: 'name is required'
            }
        }
    },
    price: {
        type: DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg: "price is required"
            },
            notEmpty : {
                msg: 'price is required'
            }
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg: "image is required"
            },
            notEmpty : {
                msg: 'image is required'
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg: "description is required"
            },
            notEmpty : {
                msg: 'description is required'
            }
        }
    }
  }, {
    sequelize,
    modelName: 'Shoes',
  });
  return Shoes;
};