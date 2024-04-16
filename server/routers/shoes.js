const express = require("express");
const router = express.Router();
const ShoesController = require("../controllers/ShoesController");
const {adminOnly} = require("../middleware/authorization")

router.get("/", ShoesController.findAll);
router.get("/:id", ShoesController.findOne);

router.use(adminOnly);

module.exports = router;
