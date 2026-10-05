import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">Welcome to the User Directory</h1>
      <p className="text-lg text-gray-600">Browse the directory to view each user&apos;s profile.</p>
      <Link className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700" to="/users">
        View users
      </Link>
    </section>
  )
}

export default Home