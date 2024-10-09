import { useSearchBookByName } from '../../hooks/UseSearchBookbyName'
import { BookData } from '../../model/BookData'

interface SearchResultProps {
  searchTerm: string
}

export default function SearchResult({ searchTerm }: SearchResultProps) {
  const { books, error, loading } = useSearchBookByName(searchTerm)

  return (
    <div>
      <h1>Search Result Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && books.length === 0 && <p>No results found.</p>}
      <ul>
        {books.map((book: BookData, index: number) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title} />
            <p>{book.publisher}</p>
            <p>{book.pubdate}</p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
