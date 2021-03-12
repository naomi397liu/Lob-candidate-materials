const { Router, request } = require('express');
const express = require( 'express' );

const app = express();
const addressController = require('./controllers/address/');

app.get( '/', ( req, res ) => {
  res.send({ greeting: 'Hello world!' });
});

app.get( '/addresses', async ( req, res ) => {
  // get all addresses from the DB
  const allAddresses = await addressController.search()
  res.send({ allAddresses });
});

app.delete( '/deleteaddress', ( req, res ) => {
  // delete a address from the DB
  res.send({ greeting: 'Hello world!' });
});

app.listen( process.env.PORT );
