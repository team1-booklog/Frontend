import SampleReviewImg from '../../assets/images/SampleReviewImg.svg'
import cn from '../../libs/cn'

// 예시 더미 데이터 하드코딩
export default function Review() {
  return (
    <>
      <div
        className={cn(
          'w-72 h-80 flex flex-col bg-[#fafafa] shadow-lg rounded-2xl',
          'transform transition duration-300 ease-in-out',
          'hover:scale-105 hover:shadow-2xl hover:translate-y-'
        )}
      >
        <img
          src={SampleReviewImg}
          alt="SampleReviewImg"
          className="w-full h-44 rounded-t-2xl"
        />
        <p className="text-2xl text-[#2B5877] pt-2 px-8">
          생의 외침 속에서 찾는 진정한 나
        </p>
        <div className="flex flex-grow pt-8">
          <p className="text-sm text-[#2B5877] ml-8">김해솔</p>
          <p className="text-sm text-[#918F8F] pl-24">2024. 10. 5.</p>
        </div>
      </div>
    </>
  )
}
