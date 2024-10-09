import { useSearchBookByName } from '../../hooks/UseSearchBookbyName';
import { BookData } from '../../model/BookData';
import BookCardComponent from '../common/BookCardComponent';
import cn from '../../libs/cn.ts';

interface SearchResultProps {
  searchTerm: string;
}

export default function SearchResult({ searchTerm }: SearchResultProps) {
  const { books, error, loading } = useSearchBookByName(searchTerm);

  const handleBookClick = (isbn: string) => {
    const bookSlug = isbn.toString();
    window.open(`/book/${bookSlug}`, '_blank'); // 새 탭에서 열기
  };

  return (
    <div className="p-4">
      <h1
        className={cn(
          'text-2xl md:text-3xl lg:text-4xl font-semibold text-center',
          'mb-6 text-[#EC6B53]'
        )}
      >
        검색 결과
      </h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && books.length === 0 && (
        <p className="text-center">검색 결과가 없습니다.</p>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
          {!loading && !error && books.map((book: BookData, index: number) => (
            <BookCardComponent
              key={index}
              title={book.title}
              imageUrl={book.image}
              onClick={() => handleBookClick(book.isbn)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
