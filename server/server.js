const { Router, request } = require('express');
const express = require( 'express' );
const cors = require('cors');

const app = express();
const addressController = require('./controllers/address/');
app.options('*', cors())

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
  console.log('********')
  console.log(addressId)
  await addressController.delete(addressId);
  res.send({message: 'delete succesful'})
});

app.listen( process.env.PORT );
