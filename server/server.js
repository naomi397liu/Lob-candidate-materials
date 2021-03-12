const { Router, request } = require('express');
const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) => {
  res.send({ greeting: 'Hello world!' });
});

app.get( '/addresses', ( req, res ) => {
  // get all addresses from the DB
  res.send({ greeting: 'Hello world!' });
});


app.delete( '/deleteaddress', ( req, res ) => {
  // delete a address from the DB
  res.send({ greeting: 'Hello world!' });
});

app.listen( process.env.PORT );
