const db = require('../config/db');

const getAllCandidates = () => {
  return new Promise((resolve, reject) => {
    const connection = db.getConnection();
    connection.query('SELECT * FROM candidates', (err, candidates) => {
      if (err) {
        reject(err);
      } else {
        resolve(candidates);
      }
    });
  });
};

module.exports = {
  getAllCandidates,
};