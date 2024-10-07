import cn from '../../libs/cn'

interface BookCardComponentProps {
  title: string;
  imageUrl: string;
}

export default function BookCardComponent({ title, imageUrl }: BookCardComponentProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img 
        src={imageUrl}
        alt="book" 
        className={cn(
          "w-32 h-40 md:w-48 md:h-60 lg:w-60 lg:h-80 object-cover mb-4 rounded-lg shadow-lg",
          "transform transition duration-300 ease-in-out",
          // 호버 시 크기, 그림자, 위치 변경
          "hover:scale-105 hover:shadow-2xl hover:translate-y-2" 
        )}
      />
      <h3 className="text-center text-sm md:text-base lg:text-lg">
        { title }
      </h3>
    </div>
  )
}
