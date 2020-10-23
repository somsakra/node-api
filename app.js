const express = require('express');
const bodyParser = require('body-parser');

const powerSum = require('./power-sum');
const timeConversion = require('./time-conversion');
const camelCaseCount = require('./camel-case-count');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`it's work`);
});

app.post('/power-sum', (req, res) => {
  const result = powerSum(Number(req.body.x), Number(req.body.n));
  res.json({ result: result });
});

app.post('/time-conversion', (req, res) => {
  const result = timeConversion(req.body.time12);
  res.json({ result: result });
});

app.post('/camel-case-count', (req, res) => {
  const result = camelCaseCount(req.body.s);
  res.json({ result: result });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
