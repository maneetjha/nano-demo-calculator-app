const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const first = req.body.first;
    const second = req.body.second;
    const sum =first + second;
    res.json({ "result": sum });
});


baseRouter.post('/subtract', (req, res) => {
    const first = req.body.first;
    const second = req.body.second;
    const diff =first - second;
    res.json({ "result": diff });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});