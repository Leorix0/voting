const db = require('../config/db');

const submitVote = (positionId, candidateId, userId) => {
  return new Promise((resolve, reject) => {
    const connection = db.getConnection();
    // Implement vote submission logic here
    // You need to insert the vote into the database
    connection.query('INSERT INTO votes (position_id, candidate_id, user_id) VALUES (?, ?, ?)', [positionId, candidateId, userId], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  submitVote,
};