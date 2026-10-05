import { Link } from 'react-router-dom'
import { users } from '../data/user'

function Users() {
  return (
    <section className="page">
      <h1>Users</h1>
      <div className="user-grid">
        {users.map((user) => (
          <Link className="user-card" key={user.id} to={`/users/${user.id}`}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Users