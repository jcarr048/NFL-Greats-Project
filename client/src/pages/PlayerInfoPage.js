import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

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
          <p>Position: {playerDetails?.position}</p>
          <p>Years Played: {playerDetails?.yearsPlayed}</p>
          <p>College: {playerDetails?.college}</p>
          <p>Pro Bowls: {playerDetails?.proBowls}</p>
          <p>Superbowls: {playerDetails?.superBowls}</p>
          <p>MVPs: {playerDetails?.mVP}</p>
        </div>
        <button onClick={pageChange}>Create New Player</button>
        <Link to="/createplayer">Create New Player</Link>
      </section>
    </div>
  )
}

export default PlayerInfoPage
