import { useBook } from '../hooks/UseBook'
import { getDisplayAuthor } from '../libs/AuthorUtils'
import Write from '../assets/icons/Write.svg'

export default function Book() {
  const { bookData, error } = useBook()

  if (error) {
    return <p>Error: {error}</p>
  }

  let displayAuthor = ''
  if (bookData) {
    displayAuthor = getDisplayAuthor(bookData.author)
  }

  return (
    <div>
      <div className="h-[552px] bg-[#f1f1f1]">
        {bookData ? (
          <div className="flex justify-center pt-36">
            <div className="flex flex-row gap-28">
              <img
                src={bookData.image}
                alt={bookData.title}
                className="w-auto h-80 bg-[#dbdbdb] border-[1px] border-[#dbdbdb] rounded-2xl shadow-lg"
              />
              <div className="flex flex-col w-[654px] pt-16">
                <div className="flex flex-col gap-8">
                  <p className="max-w-[648px] max-h-[93px] font-semibold text-4xl line-clamp-1">
                    {bookData.title}
                  </p>
                  <p className="max-w-[648px] font-normal text-2xl">
                    {displayAuthor}
                  </p>
                </div>
                <p
                  className="pt-10 max-w-[648px] text-sm text-[#4e4d4d] line-clamp-5"
                  style={{ lineHeight: '1.5', maxHeight: '180px' }}
                >
                  {bookData.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No book data available.</p>
        )}
      </div>
      <div className="px-80 pt-14">
        <div className="flex justify-between">
          <p className="font-semibold text-5xl">독자들의 감상평</p>
          <button className="bg-[#2b5877] rounded-lg">
            <div className="px-4 flex justify-center">
              <img src={Write} alt="WriteIcon" className="" />
              <p className="py-1 text-[#fafafa] text-sm">독후감 쓰기</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
