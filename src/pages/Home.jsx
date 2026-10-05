import { Link } from 'react-router-dom'
import { users } from '../data/user'

function Home() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 px-7 py-14 text-white shadow-2xl shadow-cyan-900/20 sm:px-14 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative max-w-2xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">A living directory</p>
        <h1 className="text-5xl font-black leading-none tracking-tight sm:text-7xl">Meet the minds behind <span className="text-cyan-300">the future.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">A curated network of innovators, builders, and thinkers. Find your next connection in {users.length} unique profiles.</p>
        <Link className="mt-9 inline-flex cursor-pointer items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300" to="/users">
          Explore the network <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="relative mt-12 grid max-w-md grid-cols-3 gap-3 border-t border-white/10 pt-6">
        <div><p className="text-2xl font-black">{users.length}</p><p className="text-xs uppercase tracking-wider text-slate-400">Profiles</p></div>
        <div><p className="text-2xl font-black">24/7</p><p className="text-xs uppercase tracking-wider text-slate-400">Curiosity</p></div>
        <div><p className="text-2xl font-black">∞</p><p className="text-xs uppercase tracking-wider text-slate-400">Potential</p></div>
      </div>
    </section>
  )
}

export default Home