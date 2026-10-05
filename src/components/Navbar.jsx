import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkClassName = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
    }`

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link className="text-lg font-bold text-gray-900" to="/">
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
        </div>
      </nav>
    </header>
  )
}

export default Navbar