import { useState } from 'react'
import './App.css'

export default function App() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [guests, setGuests] = useState([])

const handleSubmit = (eventObj) => {
  eventObj.preventDefault()
  console.log('eventObj', eventObj)

const newGuest = {
  id: Date.now(),
  name: name,
  email: email
}

setGuests([...guests, newGuest])
setName('')
setEmail('')
}

const removeGuest = (id) => {
 const filteredArray = guests.filter((guest) => guest.id !== id)
  setGuests(filteredArray)
}
// const myEventListener ((e) => {})
// setName(e.target.value)

return (
    <div>
      <h1>RSVP Practice</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => 
      setName(e.target.value)
      }/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => {
        setEmail(e.target.value)}}/>
        <button type="submit">Add Guest</button>
      </form>
      <h2>Guest List</h2>
      { guests.length === 0 ? <p>No guests Yet!</p> :       guests.map((guestObj) => {
          return (
            <div key={guestObj.id}>
               Name: {guestObj.name}
               email: {guestObj.email} 
               <button onClick={() => removeGuest(guestObj.id)}>Remove</button>  
            </div>
          )
        })
      }  
 
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}