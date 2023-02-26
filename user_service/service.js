const express = require('express');
const app = express();
const port = 3001;

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Matt Daniells' },
    { id: 4, name: 'Joseph Wives' },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`);
});
