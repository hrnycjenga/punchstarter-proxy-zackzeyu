const express = require('express');
// const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3400;
const app = express();

// app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
	console.log(`🍿 Proxy server listening on port ${port}`);
});
