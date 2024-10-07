import { useState } from 'react';
import cn from '../libs/cn.ts';
import SearchBar from '../components/MainPage/SearchBar.tsx';
import CurrentlyTrendingBook from '../components/MainPage/CurrentlyTrendingBook.tsx';

export default function MainPage() {
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = (searchText: string) => {
    alert(`검색 결과 페이지로 이동합니다. 검색어: ${searchText}`);
    setIsSearch(true);
  };

  return (
    <>
      <div
        className={cn(
          'relative w-full flex-col justify-center text-center',
          'flex flex-col items-center gap-3 md:gap-6',
          'w-fit font-rockwell font-normal'
        )}
      >
        <h1 
          className={cn(
            "w-fit text-4xl md:text-6xl xl:text-8xl text-[#2B5877]",
            "mt-14 md:mt-20 xl:mt-32"
          )}
          style={{ letterSpacing: '0.1em' }}
        >
          BookLog
        </h1>
        <h2 className={cn(
          "w-fit text-base md:text-2xl xl:text-4xl text-[#918F8F]",
          'mb-6 md:mb-0'
        )}>
          join our community and share your book reviews.
        </h2>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />
    
      <div>
        {!isSearch && <CurrentlyTrendingBook />}
      </div>
    </>
  );
}
