import styles from './card.module.scss'
import Button from '../button/button'
import Input from '../input/input'

export default function Card({children, editState, addState, id, getAllAddresses, toggleEdit, toggleAdd }) {

  function deleteStuff() {
    console.log('ONLY RUNS when someone clicks delete')
    // use fetch to send a delete request 
    fetch(`http://localhost:3001/delete?id=${id}`, {
      method: 'delete'
    })
    .then(response => response.json())
    .then(res => getAllAddresses());
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
      <Input label='Line1'></Input>
      <Input label='City'></Input>
      <Input label='State'></Input>
      <Input label='Zip'></Input>
      <Button variant="primary">Save</Button>
    </div>
  </div>
  )
}