const express = require('express');
const router = express.Router();
const candidatesController = require('../controllers/candidatesController');

router.get('/', candidatesController.getAllCandidates);

module.exports = router;