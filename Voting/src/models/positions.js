const db = require('../config/db');

const getAllPositions = () => {
  return new Promise((resolve, reject) => {
    const connection = db.getConnection();
    connection.query('SELECT * FROM positions', (err, positions) => {
      if (err) {
        reject(err);
      } else {
        resolve(positions);
      }
    });
  });
};

module.exports = {
  getAllPositions,
};