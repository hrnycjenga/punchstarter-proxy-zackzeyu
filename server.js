const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/product/:id', (req, res) => {
  var id = req.params.id;
  axios
    .get(`ec2-3-88-85-118.compute-1.amazonaws.com/product/${id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log(err));
});

app.post('/product/:id', (req, res) => {
  var id = req.params.id;
  axios
    .post(`ec2-3-88-85-118.compute-1.amazonaws.com/product/${id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log(err));
});

app.post('/reward/:id/', (req, res) => {
  var id = req.params.id;
  axios
    .post(`ec2-3-88-85-118.compute-1.amazonaws.com/reward/${id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log(err));
});

app.get('/countries/:id', (req, res) => {
  var id = req.params.id;
  axios
    .get(`ec2-3-88-85-118.compute-1.amazonaws.com/countries/${id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log(err));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
