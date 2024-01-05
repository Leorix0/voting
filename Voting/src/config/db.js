
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'voting_system',
});

module.exports = {
  setup: () => {
    db.connect(err => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
      } else {
        console.log('Connected to MySQL');


        createTables();
      }
    });
  },
  getConnection: () => db,
};


function createTables() {
  const createPositionsTable = `
    CREATE TABLE IF NOT EXISTS positions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;

  const createCandidatesTable = `
    CREATE TABLE IF NOT EXISTS candidates (
      id INT AUTO_INCREMENT PRIMARY KEY,
      position_id INT,
      name VARCHAR(255) NOT NULL,
      FOREIGN KEY (position_id) REFERENCES positions(id)
    )
  `;

  const createVotesTable = `
    CREATE TABLE IF NOT EXISTS votes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      position_id INT,
      candidate_id INT,
      user_id INT,
      FOREIGN KEY (position_id) REFERENCES positions(id),
      FOREIGN KEY (candidate_id) REFERENCES candidates(id)
    )
  `;

  db.query(createPositionsTable, (err) => {
    if (err) {
      console.error('Error creating positions table:', err);
    } else {
      console.log('Positions table created');
    }
  });

  db.query(createCandidatesTable, (err) => {
    if (err) {
      console.error('Error creating candidates table:', err);
    } else {
      console.log('Candidates table created');
    }
  });

  db.query(createVotesTable, (err) => {
    if (err) {
      console.error('Error creating votes table:', err);
    } else {
      console.log('Votes table created');
    }
  });
}