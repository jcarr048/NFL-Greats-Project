import './App.css'
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
          <Route path="/playerpage" element={<PlayerPage />} />
          <Route path="/teams" element={<TeamPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
