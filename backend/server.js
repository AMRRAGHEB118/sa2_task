const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const countLetters = require('./utils/countLetters');
const writeCharacters = require('./utils/writeCharacters');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! - from NodeJS count letters server!!');
});

app.post('/api/countLetters', (req, res) => {
    const paragraph = req.body.paragraph;
    const result = countLetters(paragraph);
    res.status(200).json({ message: result });
});

app.post('/api/writeCharacters', (req, res) => {
    const paragraph = req.body.paragraph;
    const result = writeCharacters(paragraph);
    res.status(200).json({ message: result });
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});