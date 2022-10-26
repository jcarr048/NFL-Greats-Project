import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TeamInfo from '../components/TeamInfo'

const Home = () => {
  const [teams, setTeams] = useState([])
  const getTeams = async () => {
    const response = await axios.get(`http://localhost:3001/api/teams`)
    setTeams(response.data.results)
    console.log(response.data)
  }
  useEffect(() => {
    getTeams()
  }, [])
  return (
    <div>
      <div className="teams">
        <h2>Teams</h2>
        <section className="container-grid">
          {teams.map((result) => (
            <Link to={`/view/${result.id}`} key={result.id}>
              <TeamInfo
                image={result.image}
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
