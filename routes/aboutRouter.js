const express = require('express');
const router = express.Router();

// controller import
const { aboutController } = require('../controllers/about-controller');

router.get("/", aboutController);

module.exports = router;