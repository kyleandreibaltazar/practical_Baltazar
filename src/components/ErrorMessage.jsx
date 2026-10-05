function ErrorMessage({ message = 'No users found' }) {
  return <p className="text-lg text-red-600">{message}</p>
}

export default ErrorMessage