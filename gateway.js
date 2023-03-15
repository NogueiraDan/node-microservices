const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

// Service's URL
const userURl = 'http://localhost:3001';
const productURL = 'http://127.0.0.1:8000';

app.use(cors());

app.get('/', (req, res)=>{
  res.send({message: 
    "You're in a Main Gateway of API's"
  })
})


/* INITIAL OF USER MICROSERVICES  */
app.get('/users', async (req, res)=>{
  try {
    const response = await axios.get(`${userURl}/`);
    res.status(200).send(response.data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
    
  }
})

app.get('/userapidetail', async (req, res)=>{
  try {
    const response = await axios.get(`${userURl}/details`);
    res.status(200).send(response.data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
    
  }
})

app.get('/books', async (req, res)=>{
  try {
    const response = await axios.get(`${userURl}/books`);
    res.status(200).send(response.data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
    
  }
})
/* END OF USER MICROSERVICES  */



/* INITIAL OF PRODUCTS MICROSERVICES  */
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get(`${productURL}/products`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*END OF PRODUCTS MICROSERVICES */




app.listen(5000, () => {
  console.log('Gateway API listening at http://localhost:5000');
});