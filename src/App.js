import './styles/index.css'
import Header from './components/Header'
import About from './pages/About'
import PlayerPage from './pages/PlayerPage'
import TeamPage from './pages/TeamPage'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teamspage/:teamId" element={<TeamPage />} />
          <Route path="/playerspage/:playerId" element={<PlayerPage />} />
        </Routes>
      </main>
    </div>
  )
}
