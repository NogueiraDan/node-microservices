const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

// Service's URL
const userMicroserviceUrl = 'http://localhost:3000';
const productMicroserviceUrl = 'http://127.0.0.1:8000';

app.use(cors());

app.get('/', (req, res)=>{
  res.send({message: "You're in a Main Gateway of API's"})
})
// Microservice of Users
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${userMicroserviceUrl}/users`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Microservices of Prodcuts
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get(`${productMicroserviceUrl}/products`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  console.log('Gateway API listening at http://localhost:5000');
});