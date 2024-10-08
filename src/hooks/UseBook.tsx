import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBookData } from '../services/BookService'
import { BookData } from '../model/BookData'

export const useBook = () => {
  const { bookSlug } = useParams()
  const [bookData, setBookData] = useState<BookData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (bookSlug) {
      const getBookData = async () => {
        try {
          const data = await fetchBookData(bookSlug)
          setBookData(data)
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : '알 수 없는 오류가 발생했습니다.'
          )
        }
      }

      getBookData()
    }
  }, [bookSlug])

  return { bookData, error }
}
