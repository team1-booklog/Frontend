import cn from '../../libs/cn';
import PersonSeatAndReadingABook from '../../assets/PersonSeatAndReadingABook.svg';

export default function NoBook() {
  return (
    <div className={cn(
      "py-20 gap-10",
      "flex flex-col justify-center items-center text-center"
    )}>
      <img 
        src={PersonSeatAndReadingABook} 
        alt="person reading a book" 
        className="w-[300px] md:w-[400px]"
      />
      <div className='text-2xl text-slate-400 mt-4'>
        <p>아직 읽은 책이 없어요.</p>
        <p>책을 읽고 감상을 공유해보세요.</p>
      </div>
    </div>
  );
}