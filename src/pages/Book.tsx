import { useBook } from '../hooks/UseBook'

export default function Book() {
  const { bookData, error } = useBook()

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Book Detail Page</h1>
      {bookData ? (
        <div>
          <p>Title: {bookData.title}</p>
          <p>Author: {bookData.author}</p>
          <p>Publisher: {bookData.publisher}</p>
          <p>Publication Date: {bookData.pubdate}</p>
          <p>ISBN: {bookData.isbn}</p>
          <p>Price: {bookData.discount} 원</p>
          <p>Description: {bookData.description}</p>
          <a href={bookData.link} target="_blank" rel="noopener noreferrer">
            자세히 보기
          </a>
          <img src={bookData.image} alt={bookData.title} />
        </div>
      ) : (
        <p>No book data available.</p>
      )}
    </div>
  )
}
