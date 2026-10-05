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
          ? 'rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm'
          : 'rounded-lg border border-gray-200 bg-white p-5 shadow-sm'
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className={isDarkMode ? 'mt-2 text-gray-300' : 'mt-2 text-gray-600'}>{email}</p>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{company}</p>
        </div>
        <button
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
          type="button"
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <Link className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-700" to={`/users/${id}`}>
        View details
      </Link>
    </article>
  )
}

export default UserCard