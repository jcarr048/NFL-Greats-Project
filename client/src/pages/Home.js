import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TeamInfo from '../components/TeamInfo'

const Home = () => {
  const [teams, setTeams] = useState([])
  const getTeams = async () => {
    const response = await axios.get(`/api/teams`)
    setTeams(response.data.teams)
  }
  useEffect(() => {
    getTeams()
  }, [])
  return (
    <div>
      <img
        className="nfllogo"
        src="https://s7d2.scene7.com/is/image/TWCNews/7-1-20_nfl_logo_jpg"
        alt="nfl"
      ></img>
      <div className="teams">
        <h2>NFC South Teams</h2>
        <section className="container-grid">
          {teams?.map((result) => (
            <Link to={`/view/${result._id}`} key={result._id}>
              <TeamInfo
                logo={result.logo}
                name={result.name}
                division={result.division}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
