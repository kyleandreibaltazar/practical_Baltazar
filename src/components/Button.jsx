function Button({ label, onClick, variant = 'primary', children }) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      className={`rounded px-4 py-2 font-medium transition-colors ${variantClasses[variant]}`}
      onClick={onClick}
      type="button"
    >
      {label}
      {children}
    </button>
  )
}

export default Button