/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* require express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// require cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 7000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });


