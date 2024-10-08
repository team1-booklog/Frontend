export const NAVER_API_HEADERS = {
  'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
  'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
}

const BOOK_SEARCH_ENDPOINT = '/v1/search/book.json'

export const getBookSearchUrl = (query: string) =>
  `${BOOK_SEARCH_ENDPOINT}?query=${query}`
