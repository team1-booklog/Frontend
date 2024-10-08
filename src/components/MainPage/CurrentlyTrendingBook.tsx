import { useNavigate } from 'react-router-dom'
import BookCardComponent from '../common/BookCardComponent'
import cn from '../../libs/cn.ts'

export default function CurrentlyTrendingBook() {
  const navigate = useNavigate()

  // 레이아웃을 위한 임시 데이터
  const tempData = {
    bookList: [
      {
        isbn: '9791163034735',
        title: 'Doit! 점프 투 파이썬',
        imageUrl:
          'https://image9.coupangcdn.com/image/vendor_inventory/9ade/a02d54da37050318e16a716ef452616fa0d747061b44b77602408184a384.jpg',
      },
      {
        isbn: '9791193926161',
        title: '실전 스벨트 & 스벨트킷 입문',
        imageUrl:
          'https://image.yes24.com/YES24ViewerDatas/Z1260_LT/A12594/B125932/125931860_L/15zjwcxrq2qdmcdx01.jpg',
      },
      {
        isbn: '9788971968413',
        title: '누가 내 머리에 똥쌌어?',
        imageUrl:
          'https://image.yes24.com/YES24ViewerDatas/Z1_LT/A1/B2/1315_L/z35llww4yi7bw722%EB%88%84%EA%B0%80.jpg',
      },
      {
        isbn: '9791170283836',
        title: '구름빵',
        imageUrl: 'https://image.yes24.com/goods/1472361/XL',
      },
    ],
  }

  const handleBookClick = (isbn: string) => {
    const bookSlug = isbn.toString()
    navigate(`/book/${bookSlug}`)
  }

  return (
    <>
      <h2
        className={cn(
          'text-xl md:text-2xl lg:text-4xl font-semibold',
          'mb-3 md:mb-6 text-center p-4 md:p-8 xl:p-12'
        )}
      >
        지금 독자들이{' '}
        <span className="text-[#EC6B53]">가장 많이 이야기하는 책</span>
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
          {tempData.bookList.map((book, index) => (
            <BookCardComponent
              key={index}
              title={book.title}
              imageUrl={book.imageUrl}
              onClick={() => handleBookClick(book.isbn)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
