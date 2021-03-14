import Head from 'next/head'
import Layout from '../components/layout/layout'
import Input from '../components/input/input'
import Card from '../components/card/card'
import Button from '../components/button/button'
import React from 'react'




export default function Home( {} ) {
  
  const [addressCardData, setAddressCardData] = React.useState([])
  const [cardIdBeingEdited, setcardIdBeingEdited] = React.useState('')
  const [searchString, setSearchString] = React.useState('')
  

  //replaces getAllAddresses
  function getFilteredAddresses() {
    fetch(`http://localhost:3001/search?searchString=${searchString}`)
    .then(res => {return res.json()})
    .then(data => setAddressCardData(data['filteredAddresses']));
    
  }
  
  function makeAddressCards() {
    const addressCards = []
    for (let address of addressCardData) {
        let card = (
        <Card 
          closeEdit={() => setcardIdBeingEdited('')}
          getAllAddresses={getFilteredAddresses}
          toggleEdit={() => setcardIdBeingEdited(address.id)}
          editState={cardIdBeingEdited === address.id}
          id={address.id}
          key={address.id}
          address={address}> 
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

  React.useEffect(getFilteredAddresses, [searchString])
  

    return (
      <Layout home>
        <Head>
          <title>Address Book</title>
        </Head>
        <h1 className="mb-8">Address Book</h1>
        <div className="w-full md:w-1/2">
          <Input
            icon="icon-search.svg"
            label="Search" 
            curValue={searchString} 
            update={setSearchString}
          ></Input>
        </div>
        <div className="mt-10">
          <Card 
            closeEdit={() => setcardIdBeingEdited('')}
            editState={cardIdBeingEdited === 'addAddress'} 
            addState={true}
            getAllAddresses={getFilteredAddresses}
            toggleAdd={() => setcardIdBeingEdited('addAddress')}
            >
            <p className="text-lg"> Enter a new address </p>
          </Card> 
          {makeAddressCards()}
        </div>
      </Layout>
    )
  
}