const express = require('express');
const app = express();
const port = 3001;
const userController = require('./user/user.controller')


// ROTAS DA APLICAÇÃO
app.get("/", userController.users)
app.get("/details", userController.initialService);


app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`);
});
