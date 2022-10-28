import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const TeamPage = () => {
  const [teamDetails, setTeamDetails] = useState(null)

  let { teamId } = useParams()
  const getTeamDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/teams/${teamId}`
    )
    setTeamDetails(response.data.team)
  }
  useEffect(() => {
    getTeamDetails()
  }, [teamId])

  return (
    <div className="team-content">
      <section className="image-container">
        <div>
          <img src={teamDetails?.logo} alt={teamDetails?.name}></img>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>Name: {teamDetails?.name}</h3>
          <p>Year Founded: {teamDetails?.yearFounded}</p>
          <p>Super Bowls Won: {teamDetails?.superBowls}</p>
          <p>Team's Best Player:{teamDetails?.bestPlayer}</p>
        </div>
        <Link to="/playerpage">Click here to view the players</Link>
      </section>
    </div>
  )
}

export default TeamPage
