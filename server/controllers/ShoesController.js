const { Op } = require("sequelize")
const { Shoes, Category } = require("../models") 

class ShoesController {
    // PUBLIC SITE
	static async pub_findAll(req, res, next) {
		try {
			let { q } = req.query;
			let option = {
				include: {
					model: Category,
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				where: {},
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			};
			if (q) option.where.title = { [Op.iLike]: `%${q}%` };
			const data_shoes = await Shoes.findAll(option);
			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    // NEED AUTHENTICATION FITUR
	static async findAll(req, res, next) {
		try {
			let { q } = req.query;
			let option = {
				include: {
					model: Category,
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				where: {},
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			};
			if (q) option.where.title = { [Op.iLike]: `%${q}%` };
			const data_shoes = await Shoes.findAll(option);
			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    static async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const data_shoes = await Shoes.findByPk(id);
			if (!data_shoes) throw { name: "NotFound" };

			res.status(200).json(data_shoes);
		} catch (error) {
			next(error);
		}
	}
    
}

module.exports = ShoesController