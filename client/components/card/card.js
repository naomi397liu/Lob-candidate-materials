import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'
import React from 'react'

export default function Card({children, editState, addState, id, getAllAddresses, toggleEdit, toggleAdd, address, closeEdit }) {

  const [line1, setLine1] = React.useState(address ? address.line1 : '')
  const [city, setCity] = React.useState(address ? address.city : '')
  const [state, setState] = React.useState(address ? address.state : '')
  const [zip, setZip] = React.useState(address ? address.zip : '')

  
  function deleteStuff() {
    // use fetch to send a delete request 
    fetch(`http://localhost:3001/delete?id=${id}`, {
      method: 'delete'
    })
    .then(response => response.json())
    .then(res => getAllAddresses());
  }

  function addAddress() {
   
    const fakeAddress = {
      'line1': line1, 
      'city': city, 
      'state': state, 
      'zip': zip,
    }
    fetch(`http://localhost:3001/add`, {
        headers: {
          'Content-Type': 'application/json'
        },
      method: 'post',
      body: JSON.stringify(fakeAddress)
    })
    .then(response => response.json())
    .then(res => getAllAddresses());
    closeEdit()
  }

  function save(){

    const fakeAddress = {
      'line1': line1, 
      'city': city, 
      'state': state, 
      'zip': zip,
      'id': id
    }

    fetch(`http://localhost:3001/update?id=${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      method: 'post',
      body: JSON.stringify(fakeAddress)
    })
    .then(response => response.json())
    .then(res => getAllAddresses());
    closeEdit()

  }

  return (
  <div className={styles.card}>
    <div className={`flex flex-wrap justify-between items-center`}>
      <div className="mb-4 md:mb-0">
        {children}
      </div>
      <div >
        {addState ? 
          <Button doThisWhenClicked={toggleAdd} variant="secondary">Add Address</Button>
        : 
          <>
            <Button doThisWhenClicked={toggleEdit} variant="secondary">Edit</Button>
            <Button doThisWhenClicked={deleteStuff} variant="error">Delete</Button>        
          </>
        }
      </div>
    </div>
    <div className={`border-2 border-purple p-8 mt-8 w-full md:w-1/2 ${editState ? styles['card__edit--visible']: styles['card__edit']}`}>
      <Input id='input1' curValue={line1} update={setLine1} placeholder={addState ? '' : line1} label='Line1'></Input>
      <Input id='input2' curValue={city} update={setCity} placeholder={addState ? '' : city} label='City'></Input>
      <Input id='input3' curValue={state} update={setState} placeholder={addState ? '' : state} label='State'></Input>
      <Input id='input4' curValue={zip} update={setZip} placeholder={addState ? '' : zip}  label='Zip'></Input>
      <Button doThisWhenClicked={addState ? addAddress : save } variant="primary">Save</Button>
    </div>
  </div>
  )
}