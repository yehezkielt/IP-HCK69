"use strict";
const axios = require("axios");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const options = {
      method: "GET",
      url: "https://jordan-shoes.p.rapidapi.com/shoes",
      headers: {
        "X-RapidAPI-Key": "bbeadb5803msh04404af31a786e9p137841jsn9370c02098e0",
        "X-RapidAPI-Host": "jordan-shoes.p.rapidapi.com",
      },
    };

    const { data: rawShoes } = await axios.request(options);

    const dataShoes = rawShoes.map((el) => {
      return {
        name: el.name,
        price: el.price,
        img: el.img,
        quantity: el.quantity,
        UserId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("Shoes", dataShoes, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Shoes", null, {});
  },
};
