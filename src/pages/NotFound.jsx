import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <p className="text-lg text-gray-600">The page you requested does not exist.</p>
      <Link className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700" to="/">
        Return home
      </Link>
    </section>
  )
}

export default NotFound