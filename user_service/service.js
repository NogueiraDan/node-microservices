const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`);
});
