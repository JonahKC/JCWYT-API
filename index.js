const express = require('express');
const path = require('path')
const fs = require('fs');
const api = express();

function randomLine(path) {
  const data = fs.readFileSync(path);
  const splitData = data.toString().split('\n')
  return splitData[Math.floor(Math.random() * splitData.length)];
}

api.use(express.static(path.join(__dirname, 'frontend')));

api.get('/pickup', (req, res) => {
  res.send(randomLine('pickups.txt'));
});

api.get('/breakup', (req, res) => {
  res.send(randomLine('breakups.txt'));
});

api.listen(3000, () => {
  console.log('API initialized');
});

""