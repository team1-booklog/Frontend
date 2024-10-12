import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchBookId } from '../services/BookService.ts'
import { useBook } from './UseBook'
import { useCurrentBookState } from '../stores/UseCurrentBookStore.ts'

export function useBookDetails() {
  const { bookId, setBookId } = useCurrentBookState()
  const { bookData } = useBook()
  const navigate = useNavigate()
  const [isAccessDenied, setIsAccessDenied] = useState(false)

  useEffect(() => {
    const fetchBookData = async () => {
      if (bookData?.isbn) {
        const data = await fetchBookId({ isbn: bookData.isbn })

        if (data === null) {
          setBookId(null)
          setIsAccessDenied(true)
        } else {
          setIsAccessDenied(false)
          console.log(data)
          setBookId(data.id)
          console.log(bookId)
        }
      }
    }

    fetchBookData()
  }, [bookData?.isbn, navigate, setBookId, bookId])

  return { bookData: isAccessDenied ? null : bookData, isAccessDenied }
}
