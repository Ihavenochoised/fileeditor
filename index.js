const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home/index.html'));
});

app.listen(port, () => {
  console.log(`
    App listening at http://localhost:${port}
    Critical errors are displayed below.\n`);
});