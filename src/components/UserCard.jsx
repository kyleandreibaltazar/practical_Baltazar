import { Link } from 'react-router-dom'

function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
  isDarkMode,
}) {
  return (
    <article
      className={
        isDarkMode
          ? 'group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-950/40'
          : 'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-cyan-100'
      }
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
      <div className="flex items-start justify-between gap-4">
        <div className="relative min-w-0">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white">
            {name.charAt(0)}
          </div>
          <h2 className="truncate text-xl font-bold tracking-tight">{name}</h2>
          <p className={isDarkMode ? 'mt-2 truncate text-sm text-slate-300' : 'mt-2 truncate text-sm text-slate-600'}>{email}</p>
          <p className={isDarkMode ? 'mt-1 text-sm text-slate-400' : 'mt-1 text-sm text-slate-500'}>{company}</p>
        </div>
        <button
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
          className="relative cursor-pointer rounded-full p-2 text-2xl text-amber-400 transition hover:scale-110 hover:bg-amber-400/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
          type="button"
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <Link className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-500 transition hover:gap-3 hover:text-cyan-400" to={`/users/${id}`}>
        View profile <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default UserCard