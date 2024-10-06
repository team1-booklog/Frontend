export default function BookList() {
  return (
    <div className="px-60 py-20">
      <h2 className="text-2xl font-semibold mb-3">최근 읽은 책</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/150" alt="book" className="w-full mb-4"/>
          <h3 className="text-lg font-semibold">책 제목</h3>
          <p className="text-sm">작가명</p>
        </div>
      </div>
    </div>
  );
}