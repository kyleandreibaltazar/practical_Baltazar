import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page">
      <h1>Welcome to the User Directory</h1>
      <p>Browse the directory to view each user&apos;s profile.</p>
      <Link className="button" to="/users">
        View users
      </Link>
    </section>
  )
}

export default Home