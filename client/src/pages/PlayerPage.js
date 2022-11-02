import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlayerInfo from '../components/PlayerInfo'

const PlayerPage = () => {
  const [players, setPlayers] = useState([])
  const getPlayers = async () => {
    const response = await axios.get(`/api/players`)
    setPlayers(response.data.players)
  }
  useEffect(() => {
    getPlayers()
  }, [])
  return (
    <div>
      <div className="players">
        <section className="container-grid">
          {players?.map((result) => (
            <Link to={`/details/${result._id}`} key={result._id}>
              <PlayerInfo image={result.image} name={result.name} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default PlayerPage
