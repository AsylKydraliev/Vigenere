const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const Vigenere = require('caesar-salad').Vigenere;

app.use(cors({origin: 'http://localhost:4200'}));

app.post('/encode', (req, res) => {
    console.log(req.body)
    res.send(Vigenere.Cipher(req.body.message).crypt(req.body.password))
});

app.post('/decode', (req, res) => {
    res.send(Vigenere.Decipher(req.body.message).crypt(req.body.password));
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});