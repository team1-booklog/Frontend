import { useBook } from '../hooks/UseBook'
import { getDisplayAuthor } from '../libs/AuthorUtils'
import Wrtie from '../assets/icons/Write.svg'

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
                className="w-56 h-80 bg-[#dbdbdb] border-[1px] border-[#dbdbdb] rounded-2xl shadow-lg"
              />
              <div className="flex flex-col w-[654px]">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-4xl">{bookData.title}</p>
                  <p className="font-normal text-2xl text-nowrap">
                    {displayAuthor}
                  </p>
                </div>
                <p className="flex flex-grow items-end text-sm text-[#4e4d4d]">
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
            <div className="flex justify-center">
              <img src={Wrtie} alt="WrtieIcon" className="" />
              <p className="text-[#fafafa] text-sm">독후감 쓰기</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
