import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlayerInfo from '../components/PlayerInfo'

const ViewPlayers = () => {
  const [players, setPlayers] = useState([])
  const getPlayers = async () => {
    const response = await axios.get(`http:localhost:3001/api/players`)
    setPlayers(response.data.results)
  }
  useEffect(() => {
    getPlayers()
  }, [])
  return (
    <div>
      <div className="players">
        <section className="container-grid">
          {players.map((result) => (
            <Link to={`/playerpage/${result.id}`} key={result.id}>
              <PlayerInfo
                image={result.image}
                name={result.name}
                team={result.team}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ViewPlayers
