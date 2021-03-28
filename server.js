const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('api running');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
