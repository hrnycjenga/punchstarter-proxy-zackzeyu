const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use('/:id', express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
