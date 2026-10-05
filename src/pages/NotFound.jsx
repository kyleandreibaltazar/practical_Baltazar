import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="rounded-3xl bg-slate-900 px-8 py-16 text-white">
      <p className="mb-3 font-mono text-cyan-400">ERROR_404</p>
      <h1 className="mb-4 text-5xl font-black">Lost in the network.</h1>
      <p className="text-lg text-slate-400">The page you requested does not exist.</p>
      <Link className="mt-8 inline-block rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300" to="/">
        Return to base
      </Link>
    </section>
  )
}

export default NotFound