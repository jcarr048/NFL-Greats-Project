import './App.css'
import Header from './components/Header'
import About from './pages/About'
import PlayerPage from './pages/PlayerPage'
import TeamPage from './pages/TeamPage'
import Home from './pages/Home'
import CreateNewPlayer from './pages/CreateNewPlayer'
import PlayerInfoPage from './pages/PlayerInfoPage'
import { Routes, Route } from 'react-router-dom'
import UpdatePlayer from './pages/UpdatePlayer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/playerpage" element={<PlayerPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/view/:teamId" element={<TeamPage />} />
          <Route path="/details/:playerId" element={<PlayerInfoPage />} />
          <Route path="/createplayer" element={<CreateNewPlayer />} />
          <Route path="/updateplayer/:playerId" element={<UpdatePlayer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
