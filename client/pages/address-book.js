import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'
import Button from '../components/button/button'
import React from 'react'




export default function Home( {} ) {
  // fetch all addresses here 
  // once i have them all, loop over them and make a Card
  // component for each address and render it on the page

  // write a function that displays all the json from '/addresses' on the front end
  const [addressCardData, setAddressCardData] = React.useState([])
  const [cardIdBeingEdited, setcardIdBeingEdited] = React.useState('')

  console.log(cardIdBeingEdited)
  function getAllAddresses() {
    fetch('http://localhost:3001/addresses')
    .then(res => {return res.json()})
    .then(data => setAddressCardData(data['allAddresses']))
  }

  function makeAddressCards() {
    const addressCards = []
    for (let address of addressCardData) {
        let card = (
        <Card 
          getAllAddresses={getAllAddresses}
          toggleEdit={() => setcardIdBeingEdited(address.id)}
          editState={cardIdBeingEdited === address.id}
          id={address.id}
          key={address.id}> 
          <p>
            {address.line1}
            {address.line2},&nbsp;
            {address.city},&nbsp;
            {address.state}&nbsp;
            {address.zip}
          </p>
        </Card>
        )
      addressCards.push(card)
    }
    return addressCards
  }

  React.useEffect(() => {
    getAllAddresses()
  }, [])
  

  // React.useEffect(() => {
  //   fetch('http://localhost:3001/delete')
  //   .then(res => {return res.json()})
  //   .then(data => makeAddressCards(data))
  // }, [])
  //cannot fetch app.delete?
    return (
      <Layout home>
        <Head>
          <title>Address Book</title>
        </Head>
        <h1 className="mb-8">Address Book</h1>
        <div className="w-full md:w-1/2">
          <Input
            icon="icon-search.svg"
            label="HELLO"
          ></Input>
        </div>
        <div className="mt-10">


          <Card 
            editState={cardIdBeingEdited === 'addAddress'} 
            addState={true}
            toggleAdd={() => setcardIdBeingEdited('addAddress')}
            >
            <p className="text-lg"> Enter a new address </p>
          </Card>
          {makeAddressCards()}
        </div>
      </Layout>
    )
  
}