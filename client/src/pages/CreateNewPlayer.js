import axios from 'axios'
import React, { useState } from 'react'

function CreateNewPlayer() {
  const initialState = {
    image: '',
    name: '',
    position: '',
    yearsPlayed: '',
    college: '',
    proBowls: '',
    superBowls: '',
    mVP: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios.post('http://localhost:3001players/new', formState)
  }

  const handleChange = (evt) => {
    setFormState({ ...formState, [evt.target.id]: evt.target.value })
  }

  return (
    <div className="new-player">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="link"
          onChange={handleChange}
          value={formState.image}
        />
        <label htmlFor="name">Player Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
          required
        />
        <label htmlFor="position">Player Position:</label>
        <input
          id="position"
          type="text"
          onChange={handleChange}
          value={formState.position}
          required
        />
        <label htmlfor="yearsPlayed">Years played (example: 2010-2020):</label>
        <input
          id="yearsPlayed"
          type="text"
          onChange={handleChange}
          value={formState.yearsPlayed}
          required
        />
        <label htmlFor="college">College Attended:</label>
        <input
          id="college"
          type="text"
          onChange={handleChange}
          value={formState.college}
          required
        />
        <label htmlFor="proBowls">Pro Bowls:</label>
        <input
          id="proBowls"
          type="text"
          onChange={handleChange}
          value={formState.proBowls}
          required
        />
        <label htmlFor="superBowls">SuperBowls (if none, place 0):</label>
        <input
          id="superBowls"
          type="text"
          onChange={handleChange}
          value={formState.superBowls}
          required
        />
        <label htmlFor="mVP">
          Most Valuable Player awards won (if none, place 0):
        </label>
        <input
          id="mVP"
          type="text"
          onChange={handleChange}
          value={formState.mVP}
          required
        />
      </form>
    </div>
  )
}

export default CreateNewPlayer
