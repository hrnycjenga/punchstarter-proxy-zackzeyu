const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3400;
const app = express();

// app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '/public')));

app.get('/:id', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
	console.log(`🍿 Proxy server listening on port ${port}`);
});
