import { Link, NavLink } from 'react-router-dom'

function Navbar({ favoriteCount, isDarkMode, onToggleTheme }) {
  const linkClassName = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-blue-600'
        : isDarkMode
          ? 'text-gray-300 hover:text-blue-400'
          : 'text-gray-600 hover:text-blue-600'
    }`

  return (
    <header className={isDarkMode ? 'border-b border-gray-800 bg-gray-900' : 'border-b border-gray-200 bg-white'}>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link className={isDarkMode ? 'text-lg font-bold text-white' : 'text-lg font-bold text-gray-900'} to="/">
          User Directory
        </Link>
        <div className="flex items-center gap-6">
          <NavLink className={linkClassName} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkClassName} to="/users">
            Users
          </NavLink>
          <NavLink className={linkClassName} to="/about">
            About
          </NavLink>
          <span>Favorites: {favoriteCount}</span>
          <button
            className="rounded border border-gray-400 px-3 py-1 text-sm"
            onClick={onToggleTheme}
            type="button"
          >
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar