const db = require('../config/db');

module.exports = {
  getAllPositions: (req, res) => {
    const connection = db.getConnection();
    connection.query('SELECT * FROM positions', (err, positions) => {
      if (err) {
        console.error('Error fetching positions:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(positions);
      }
    });
  },
};