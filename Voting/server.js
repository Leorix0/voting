const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const positionsRoutes = require('./routes/positions');
const candidatesRoutes = require('./routes/candidates');
const votesRoutes = require('./routes/votes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


db.setup();

app.use('/positions', positionsRoutes);
app.use('/candidates', candidatesRoutes);
app.use('/votes', votesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});