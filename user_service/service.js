const express = require('express');
const app = express();
const port = 3001;
const userController = require('./user/user.controller');
const bookController = require("./book/book.controller");


// ROTAS DA APLICAÇÃO
app.get("/", userController.users)
app.get("/details", userController.initialService);
app.get("/books", bookController.books)


app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`);
});
