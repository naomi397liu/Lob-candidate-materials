const { Router, request } = require('express');
const express = require( 'express' );
const cors = require('cors');

const app = express();
const addressController = require('./controllers/address/');

app.get( '/', ( req, res ) => {
  res.send({ greeting: 'Hello world!' });
});

app.get( '/addresses', cors(), async ( req, res ) => {
  // get all addresses from the DB
  const allAddresses = await addressController.search()
  res.send({ allAddresses });
});

app.get( '/banana', async ( req, res ) => {
  // get all addresses from the DB
  console.log('nnananan');
  res.send('banana');
});

app.delete( '/deleteaddress', ( req, res ) => {
  // delete a address from the DB
  res.send({ greeting: 'Hello world!' });
});

app.listen( process.env.PORT );
