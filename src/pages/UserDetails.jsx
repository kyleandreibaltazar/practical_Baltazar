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
      <div className={isDarkMode ? 'max-w-xl divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 text-slate-300' : 'max-w-xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-600'}>
        <p className="flex justify-between gap-6 px-6 py-4"><span className="text-xs font-bold uppercase tracking-wider text-cyan-500">Email</span><span>{user.email}</span></p>
        <p className="flex justify-between gap-6 px-6 py-4"><span className="text-xs font-bold uppercase tracking-wider text-cyan-500">Company</span><span>{user.company}</span></p>
        <p className="flex justify-between gap-6 px-6 py-4"><span className="text-xs font-bold uppercase tracking-wider text-cyan-500">Role</span><span>{user.role}</span></p>
      </div>
      <Link className="mt-6 inline-block text-blue-600 hover:text-blue-700" to="/users">
        Back to users
      </Link>
    </section>
  )
}

export default UserDetails