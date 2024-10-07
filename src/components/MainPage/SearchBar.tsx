import { useState, useRef } from 'react';
import MagnifyingGlass from'../../assets/icons/MagnifyingGlass.svg';
import cn from '../../libs/cn.ts';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    const enterKeyDownEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      bubbles: true,
    });

    if (inputRef.current) {
      inputRef.current.dispatchEvent(enterKeyDownEvent);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    
    // 검색어를 부모 컴포넌트에 전달
    onSearch(searchText);
  };

  return (
    <div
  className={cn(
    'relative w-full flex justify-center items-center mt-6 md:mt-20 gap-2',
    'font-rockwell font-normal px-4 md:px-10',
  )}
>
  <div className="relative w-full max-w-[1200px] border-b-2 border-[#2B5877]">
    <input
      type="text"
      placeholder="궁금한 책 제목이나 저자를 검색해보세요!"
      value={searchText}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onChange={(e) => setSearchText(e.target.value)}
      className={cn(
        'w-full p-2 text-center', // 반응형 너비
        'text-base md:text-xl xl:text-3xl focus:outline-none'
      )}
    />
    <button onClick={handleButtonClick} className="absolute right-0 mr-2">
      <img src={MagnifyingGlass} alt="Search" className="w-4 md:w-6 h-4 md:h-6" />
    </button>
  </div>
</div>

  );
}