import NoBook from "../components/MyPage/NoBook";
import BookList from "../components/MyPage/BookList";

export default function MyPage() {
  
  // 임시로 하드코딩한 유저 데이터
  const userName = '홍길동';
  const bookCount = 0;
  const bookReportCount = 15;

  return (
    <>
      <div className="px-10 md:px-60 pt-14 md:pt-28">
        <h1 className="text-xl md:text-4xl font-semibold mb-3">
          {userName}
        </h1>
        <p className="text-base md:text-2xl mb-6 md:mb-12">
          지금까지 <span className="text-[#EC6B53]">{bookCount}권</span>의 책을 읽고 <span className="text-[#EC6B53]">{bookReportCount}개</span>의 독후감을 작성했어요.
        </p>
        <hr />
      </div>
      <div>
      { (bookCount === 0) ? <NoBook /> : <BookList /> }
      </div>
    </>
  );
}