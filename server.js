const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email, company } = req.body;


    console.log('Received:', { name, email, company });

    res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Mock API running at http://localhost:${PORT}`);
});
