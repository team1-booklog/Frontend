import { useParams } from 'react-router-dom'

export default function Book() {
  const { bookSlug } = useParams()

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book Slug: {bookSlug}</p>
    </div>
  )
}
