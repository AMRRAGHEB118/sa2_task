const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});