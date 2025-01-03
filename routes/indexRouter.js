const express = require('express');
const router = express.Router();

// controller import
const { homeController } = require('../controllers/index-controller');

router.get("/", homeController);

module.exports = router;