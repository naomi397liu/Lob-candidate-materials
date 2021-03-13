const { Router, request } = require('express');
const express = require( 'express' );
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const addressController = require('./controllers/address/');
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get( '/', ( req, res ) => {
  res.send({ greeting: 'Hello world!' });
});

app.get( '/addresses', cors(), async ( req, res ) => {
  // get all addresses from the DB
  const allAddresses = await addressController.search()
  res.send({ allAddresses });
});

app.delete( '/delete', cors(), async( req, res ) => {
  // delete a address from the DB

  // get id from client server
  const addressId = req.query['id']
  // console.log('********')
  // console.log(addressId)
  await addressController.delete(addressId);
  res.send({message: 'delete succesful'})
});

app.post('/update', cors(), async(req, res) => {
  //update an existing address
  const addressId = req.query['id']
  const newData = req.body
  
  await addressController.update(addressId, newData);
  res.send({message: 'update successful'})
});

app.post('/add', cors(), async(req, res) => {
  const newData = req.body
  console.log('***************')  
  console.log(newData)
  const newAddress = await addressController.add(newData);
  res.send({newAddress})
})

app.listen( process.env.PORT );
