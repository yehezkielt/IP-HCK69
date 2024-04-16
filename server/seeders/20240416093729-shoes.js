'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   // const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://shoes-collections.p.rapidapi.com/shoes',
//   headers: {
//     'X-RapidAPI-Key': 'bbeadb5803msh04404af31a786e9p137841jsn9370c02098e0',
//     'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
//   }
// };

// 	const {data: rawShoes} = await axios.request(options);

        const dataShoes = rawShoes.map((el) => {
            return{
                name: el.name,
                price: el.price,
                image: el.image,
                description: el.description,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })

        await queryInterface.bulkInsert("Shoes", dataShoes, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Shoes", null, {})
  }
};
