import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Techniques from './pages/Techniques'
import Technique from './pages/Technique'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Achievements from './pages/Achievements'
import Progress from './pages/Progress'
import Favorites from './pages/Favorites'


export default function App() {
  return (
    
      <>
        <nav className="flex flex-row items-center justify-end text-white p-2 bg-gray-950">
          <Link to="/" className="ml-5">Início</Link>
          <Link to="/techniques" className="ml-5">Técnicas</Link>
          <Link to="/profile" className="ml-5">Perfil</Link>
          <Link to="/login" className="ml-5 px-5 py-1 rounded-lg font-semibold bg-red-600">Entrar</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/techniques/:id" element={<Technique />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </>
    
  )
}
