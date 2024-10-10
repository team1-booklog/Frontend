import SampleReviewImg from '../../assets/images/SampleReviewImg.svg'
import cn from '../../libs/cn'

// 예시 더미 데이터 하드코딩
export default function Review() {
  return (
    <>
      <div
        className={cn(
          'md:w-36 lg:w-52 xl:w-72 lg:h-60 xl:h-80 flex flex-col bg-[#fafafa] shadow-lg rounded-2xl',
          'hover:bg-[#FAFAFA] hover:opacity-20 hover:border-2 hover:border-[#2B5877] hover:inset-0'
        )}
      >
        <img
          src={SampleReviewImg}
          alt="SampleReviewImg"
          className="w-full md:h-auto xl:h-44 rounded-t-2xl"
        />
        <p className="text-xs sm:text-lg xl:text-2xl text-[#2B5877] pt-2 px-3 lg:px-8">
          생의 외침 속에서 찾는 진정한 나
        </p>
        <div className="flex flex-grow pt-7 pb-3 lg:py-3 md:py-4 xl:py-8">
          <p className="text-xs text-nowrap xl:text-sm text-[#2B5877] ml-3 lg:ml-8">
            김해솔
          </p>
          <p className="text-xs text-nowrap xl:text-sm text-[#918F8F] pl-8 lg:pl-10 xl:pl-24">
            2024. 10. 5.
          </p>
        </div>
      </div>
    </>
  )
}
