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
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Users</h1>
      <input
        aria-label="Search users by name"
        className={isDarkMode ? 'mb-8 w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-white' : 'mb-8 w-full rounded border border-gray-300 bg-white px-4 py-2'}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search users"
        type="search"
        value={searchTerm}
      />
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