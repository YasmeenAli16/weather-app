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

// GET route and callback functions
app.get('/get', allData);

function allData (req, res) {
  res.send(projectData);
 
};

  // POST route and callback functions
  // add data to endpoint object
app.post('/post', addData);

function addData(req, res){
  console.log(req.body);
  projectData = {
      date: req.body.date,
      temp: req.body.temp,
      content: req.body.content   
  }
  res.send(projectData);
}
