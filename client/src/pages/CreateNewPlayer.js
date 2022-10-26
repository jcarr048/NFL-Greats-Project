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
        <label for="image">Image:</label>
        <input
          id="image"
          type="link"
          onChange={handleChange}
          value={formState.image}
        />
        <label for="name">Player Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
          required
        />
        <label for="position">Player Position:</label>
        <input
          id="position"
          type="text"
          onChange={handleChange}
          value={formState.position}
          required
        />
        <label for="yearsPlayed">Years played (example: 2010-2020):</label>
        <input
          id="yearsPlayed"
          type="text"
          onChange={handleChange}
          value={formState.yearsPlayed}
          required
        />
        <label for="college">College Attended:</label>
        <input
          id="college"
          type="text"
          onChange={handleChange}
          value={formState.college}
          required
        />
        <label for="proBowls">Pro Bowls:</label>
        <input
          id="proBowls"
          type="text"
          onChange={handleChange}
          value={formState.proBowls}
          required
        />
        <label for="superBowls">SuperBowls (if none, place 0):</label>
        <input
          id="superBowls"
          type="text"
          onChange={handleChange}
          value={formState.superBowls}
          required
        />
        <label for="mVP">
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
