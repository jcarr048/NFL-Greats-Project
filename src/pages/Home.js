import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import PlayerInfo from '../components/PlayerInfo'
import TeamInfo from '../components/TeamInfo'
import { Link } from 'react-router-dom'

const Home = () => {
    const [teamChoice, setTeam] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const getTeams = async () => {
        const respsonse = await axios.get(
            `http://localhost:3001/api/teams`
        )
    }

    const getSearchResults = async (e) => {
        e.preventDefault()
        const response = await axios.get(
          'localhost:3001/api/
        )
        setSearchResults(response.data.results)
        toggleSearched(true)
        setSearchQuery('')
      }
    
      const handleChange = (event) => {
        setSearchQuery(event.target.value)
      }
    
      return (
        <div>
          <Search
            onChange={handleChange}
            onSubmit={getSearchResults}
            value={searchQuery}
          />
          <div className="search">
            <h2>Search Results</h2>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                <Link to={`/details/${result.id}`} key={result.id}>
                  <PlayerInfo
                    image={result.background_image}
                    name={result.name}
                    team_id={result.team_id}
                  />
                </Link>
              ))}
            </section>
          </div>
}
