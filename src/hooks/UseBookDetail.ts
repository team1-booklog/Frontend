import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchBookId } from '../services/BookService.ts'
import { useBook } from './UseBook'

export function useBookDetails() {
  const { bookData } = useBook()
  const navigate = useNavigate()
  const [isAccessDenied, setIsAccessDenied] = useState(false)

  useEffect(() => {
    const fetchBookData = async () => {
      if (bookData?.isbn) {
        try {
          const response = await fetchBookId({ isbn: bookData.isbn })

          if (response === 403 || response === 404) {
            setIsAccessDenied(true)

            alert('페이지에 접근할 수 없습니다.')
            navigate('/')
          } else {
            setIsAccessDenied(false)
          }
        } catch (error) {
          setIsAccessDenied(true)
        }
      }
    }

    fetchBookData()
  }, [bookData?.isbn, navigate])

  return { bookData, isAccessDenied }
}
