import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const PlayerInfoPage = () => {
  const [playerDetails, setPlayerDetails] = useState(null)
  const navigate = useNavigate()
  let { playerId } = useParams()
  const getPlayerDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/players/${playerId}`
    )
    setPlayerDetails(response.data.player)
  }
  useEffect(() => {
    getPlayerDetails()
  }, [playerId])

  const pageChange = () => {
    navigate('/createplayer')
  }

  const updateThisPlayer = () => {
    navigate('/updateplayer')
  }

  const deleteThisPlayer = async (playerId) => {
    try {
      await axios.delete(`http://localhost:3001/api/delete/players/${playerId}`)
    } catch (error) {}
  }

  return (
    <div className="player-content">
      <section className="player-image-container">
        <div>
          <img src={playerDetails?.image} alt={playerDetails?.name}></img>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>Name: {playerDetails?.name}</h3>
          <p>Team: {playerDetails?.team_id}</p>
          <p>Position: {playerDetails?.position}</p>
          <p>Years Played: {playerDetails?.yearsPlayed}</p>
          <p>College: {playerDetails?.college}</p>
          <p>Pro Bowls: {playerDetails?.proBowls}</p>
          <p>Superbowls: {playerDetails?.superBowls}</p>
          <p>MVPs: {playerDetails?.mVP}</p>
        </div>
        <button onClick={pageChange}>Create New Player</button>
        <button onClick={deleteThisPlayer}>Delete this Player</button>
        <button onClick={updateThisPlayer}>Update this Player</button>
        <h3>
          Disagree with this player? Have someone else in mind? Click the
          buttons above to delete the player, then create a new one.
        </h3>
      </section>
    </div>
  )
}

export default PlayerInfoPage
