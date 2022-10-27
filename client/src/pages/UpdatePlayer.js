import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UpdatePlayer() {
  const initialState = {
    image: '',
    team_id: '',
    name: '',
    position: '',
    yearsPlayed: '',
    college: '',
    proBowls: '',
    superBowls: '',
    mVP: ''
  }
  const [formState, setFormState] = useState(initialState)
  let { playerId } = useParams()
  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios.put(`http://localhost:3001/api/update/players/${playerId}`, formState)
    setFormState(initialState)
    console.log(formState)
  }

  const handleChange = (evt) => {
    setFormState({ ...formState, [evt.target.id]: evt.target.value })
  }

  return (
    <div className="update-player">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image Link:</label>
        <input
          id="image"
          type="link"
          onChange={handleChange}
          value={formState.image}
        />
        <label htmlFor="team_id">Team:</label>
        <input
          id="team_id"
          type="text"
          onChange={handleChange}
          value={formState.team_id}
        />
        <label htmlFor="name">Player Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="position">Player Position:</label>
        <input
          id="position"
          type="text"
          onChange={handleChange}
          value={formState.position}
        />
        <label htmlFor="yearsPlayed">Years played (example: 2010-2020):</label>
        <input
          id="yearsPlayed"
          type="text"
          onChange={handleChange}
          value={formState.yearsPlayed}
        />
        <label htmlFor="college">College Attended:</label>
        <input
          id="college"
          type="text"
          onChange={handleChange}
          value={formState.college}
        />
        <label htmlFor="proBowls">Pro Bowls:</label>
        <input
          id="proBowls"
          type="text"
          onChange={handleChange}
          value={formState.proBowls}
        />
        <label htmlFor="superBowls">SuperBowls (if none, place 0):</label>
        <input
          id="superBowls"
          type="text"
          onChange={handleChange}
          value={formState.superBowls}
        />
        <label htmlFor="mVP">
          Most Valuable Player awards won (if none, place 0):
        </label>
        <input
          id="mVP"
          type="text"
          onChange={handleChange}
          value={formState.mVP}
        />
        <button type="submit">Update Player</button>
      </form>
      <Link to="/playerpage">Click here to check out the updated player!</Link>
    </div>
  )
}

export default UpdatePlayer
