const express = require('express');
const cors = require('cors');

const router = require('./router/router.js');
const Database = require('./dbconnect.js');
const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//app.use('/public', express.static('public'));

// Use the Database middleware (assuming it's a valid middleware)
Database();

// Routes
app.use('/ap1', router);

// Start the server
app.listen(port, () => {
  console.log('Connected to port ' + port);
});
