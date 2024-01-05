const express = require('express');
const router = express.Router();
const votesController = require('../controllers/votesController');

router.post('/', votesController.submitVote);

module.exports = router;