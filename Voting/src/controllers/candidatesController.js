const db = require('../config/db');

module.exports = {
  getAllCandidates: (req, res) => {
    const connection = db.getConnection();
    connection.query('SELECT * FROM candidates', (err, candidates) => {
      if (err) {
        console.error('Error fetching candidates:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(candidates);
      }
    });
  },
};