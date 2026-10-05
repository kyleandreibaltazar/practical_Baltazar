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
    <header className={isDarkMode ? 'sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl' : 'sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl'}>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <Link className="flex items-center gap-3 text-lg font-black tracking-tight" to="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm text-white shadow-lg shadow-cyan-500/20">U</span>
          <span>USER<span className="text-cyan-500">SPACE</span></span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <NavLink className={linkClassName} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkClassName} to="/users">
            Users
          </NavLink>
          <NavLink className={linkClassName} to="/about">
            About
          </NavLink>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-500">Favorites: {favoriteCount}</span>
          <button
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="cursor-pointer rounded-full border border-slate-500/40 px-3 py-1.5 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
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