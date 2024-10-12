import axios from 'axios'
import { NAVER_API_HEADERS, getBookSearchUrl } from '../config/BookClient'
import { BookData } from '../model/BookData'
import { getBookIdRequest } from '../model/BookRequest'
import apiClient from '../config/ApiClient'
import { getBookIdResponse } from '../model/BookResponse'

const ERROR_MESSAGES = {
  NOT_FOUND: '책 데이터를 찾을 수 없습니다.',
  API_REQUEST_FAILED: '네이버 API 요청 실패',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
}

export const fetchBookData = async (
  bookSlug: string
): Promise<BookData | null> => {
  try {
    const response = await axios.get(getBookSearchUrl(bookSlug), {
      headers: NAVER_API_HEADERS,
    })

    const data = response.data
    if (data.items && data.items.length > 0) {
      return data.items[0]
    } else {
      throw new Error(ERROR_MESSAGES.NOT_FOUND)
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || ERROR_MESSAGES.API_REQUEST_FAILED
      )
    } else {
      throw new Error(ERROR_MESSAGES.UNKNOWN_ERROR)
    }
  }
}

export const fetchBookId = async ({ isbn }: getBookIdRequest) => {
  try {
    const response = await apiClient.get<getBookIdResponse>(`/books/${isbn}`)
    console.log(response.status)
    return response.status
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.log('404')
      return 404
    } else {
      console.error('서버 통신 실패', error)
    }
    throw error
  }
}
