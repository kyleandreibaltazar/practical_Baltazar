import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/user'

function UserDetails({ isDarkMode }) {
  const { userId } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUser(users.find((candidate) => candidate.id === userId) ?? null)
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [userId])

  useEffect(() => {
    document.title = user ? user.name : 'User not found'
  }, [user])

  if (!user) {
    return (
      <section>
        <h1 className="mb-4 text-3xl font-bold">User not found</h1>
        <Link className="text-blue-600 hover:text-blue-700" to="/users">
          Back to users
        </Link>
      </section>
    )
  }

  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">{user.name}</h1>
      <div className={isDarkMode ? 'space-y-2 text-gray-300' : 'space-y-2 text-gray-600'}>
        <p>Email: {user.email}</p>
        <p>Company: {user.company}</p>
        <p>Role: {user.role}</p>
      </div>
      <Link className="mt-6 inline-block text-blue-600 hover:text-blue-700" to="/users">
        Back to users
      </Link>
    </section>
  )
}

export default UserDetails