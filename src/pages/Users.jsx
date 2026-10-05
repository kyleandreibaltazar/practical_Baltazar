import { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import { users } from '../data/user'

function Users({ favoriteUsers, onToggleFavorite, isDarkMode }) {
  const [loadedUsers, setLoadedUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadedUsers(users)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  const filteredUsers = loadedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect(() => {
    document.title = 'Users'
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section>
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">The network</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Explore the <span className="text-cyan-500">collective.</span></h1>
          <p className={isDarkMode ? 'mt-3 text-slate-400' : 'mt-3 text-slate-500'}>{filteredUsers.length} profiles ready to discover</p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <span className="pointer-events-none absolute left-4 top-2.5 text-slate-400">⌕</span>
          <input
            aria-label="Search users by name"
            className={isDarkMode ? 'w-full rounded-xl border border-slate-700 bg-slate-900 px-10 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' : 'w-full rounded-xl border border-slate-200 bg-white px-10 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100'}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name..."
            type="search"
            value={searchTerm}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {filteredUsers.length === 0 ? (
          <ErrorMessage />
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              company={user.company}
              email={user.email}
              id={user.id}
              isFavorite={favoriteUsers.includes(user.id)}
              isDarkMode={isDarkMode}
              key={user.id}
              name={user.name}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Users