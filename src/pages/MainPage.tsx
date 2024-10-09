import { useState } from 'react';
import MainPageContext from '../components/MainPage/MainPageContext.tsx';
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
      <MainPageContext />

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />
    
      <div>
        {!isSearch && <CurrentlyTrendingBook />}
      </div>
    </>
  );
}
