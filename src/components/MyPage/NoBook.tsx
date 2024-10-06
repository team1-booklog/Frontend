import PersonSeatAndReadingABook from '../../assets/PersonSeatAndReadingABook.svg';

export default function NoBook() {
  return (
    <div className="px-60 py-20 flex flex-col justify-center text-center">
      <img 
        src={PersonSeatAndReadingABook} 
        alt="person reading a book" 
        className="w-[400px]"
      />
      <h2 className="text-2xl font-semibold mb-3">아직 읽은 책이 없어요.</h2>
      <p className="text-lg">책을 읽고 독후감을 작성해보세요.</p>
    </div>
  );
}