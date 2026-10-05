import { Link, useParams } from 'react-router-dom'
import { users } from '../data/user'

function UserDetails() {
  const { userId } = useParams()
  const user = users.find((candidate) => candidate.id === userId)

  if (!user) {
    return (
      <section className="page">
        <h1>User not found</h1>
        <Link className="button" to="/users">
          Back to users
        </Link>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Link className="button" to="/users">
        Back to users
      </Link>
    </section>
  )
}

export default UserDetails