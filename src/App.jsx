import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

function App() {
  const [favoriteUsers, setFavoriteUsers] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleFavorite = (userId) => {
    setFavoriteUsers((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId],
    )
  }

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900'}>
        <Navbar
          favoriteCount={favoriteUsers.length}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((current) => !current)}
        />
        <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Users
                  favoriteUsers={favoriteUsers}
                  onToggleFavorite={toggleFavorite}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route path="/users/:userId" element={<UserDetails isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
