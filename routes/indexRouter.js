const express = require("express");
const router = express.Router();
const { homeController } = require("../controllers/index-controller");

router.all("/", homeController); // Handle both GET and POST requests

module.exports = router;
