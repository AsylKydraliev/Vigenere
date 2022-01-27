const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const Vigenere = require('caesar-salad').Vigenere;

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.post('/encode', (req, res) => {
    const message = {
        message: Vigenere.Cipher(req.body.password).crypt(req.body.message),
    }
    res.send(message);
});

app.post('/decode', (req, res) => {
    const message = {
        message: Vigenere.Decipher(req.body.password).crypt(req.body.message),
    }
    res.send(message);
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});