const db = require('../config/db');
const votesModel = require('../models/votes');

module.exports = {
  submitVote: async (req, res) => {
    const { positionId, candidateId, userId } = req.body;

    try {
      const existingVote = await votesModel.getVoteByPositionAndUser(positionId, userId);

      if (existingVote) {
        return res.status(400).send('User has already voted for this position');
      }
      await votesModel.submitVote(positionId, candidateId, userId);

      res.send('Vote submitted successfully');
    } catch (error) {
      console.error('Error submitting vote:', error);
      res.status(500).send('Internal Server Error');
    }
  },
};
