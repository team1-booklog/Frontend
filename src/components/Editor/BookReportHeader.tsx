import { useState, useRef } from 'react';
import DefaultThubnail from '../../assets/images/DefaultThubnail.png';
import cn from '../../libs/cn';
import SearchBar from './BookReportHeader/SearchBar';

export default function BookReportHeaderEditor() {
  const [title, setTitle] = useState<string>(''); 
  const [thumbnail, setThumbnail] = useState<string>('');
  const [readBookTitle, setReadBookTitle] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl); // 이미지 미리보기
    }
  };

  const handleSearch = (searchText: string) => {
    console.log('Search Text:', searchText);
    // 검색어 처리 로직
  };

  return (
    <div className={cn(
      "p-4 md:p-8 flex justify-center",
      "mx-0 md:mx-24 xl:mx-32 border-b-2"
    )}>
      <div className="hidden md:block mr-10 text-left max-w-36">
        <h2 className='text-xl md:text-2xl text-[#2B5877]'>썸네일</h2>
        <img
          src={thumbnail || DefaultThubnail} 
          alt="썸네일" 
          className="x-24 md:x-32 xl:w-36 h-24 md:h-32 xl:h-36 rounded-xl shadow-lg" 
        />
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleThumbnailChange} 
          className="hidden" 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "mt-2 block w-full text-sm text-gray-400",
            "rounded-lg cursor-pointer focus:outline-none"
          )}
        >
          썸네일 추가
        </button>
      </div>

      <div className="flex-1 text-left max-w-2xl">
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl text-[#2B5877] mb-2">제목</h2>
            <input
              id="title" 
              type="text" 
              placeholder="제목을 입력하세요" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border-b-2 border-gray-300 text-base md:text-lg mb-5"
            />
          </div>

          {/* 모바일에서만 보이는 썸네일 */}
          <div className="flex flex-col items-start md:hidden ml-3">
            <h2 className="text-center text-base text-[#2B5877] mb-2">썸네일</h2>
            <img
              src={thumbnail || DefaultThubnail} 
              alt="썸네일" 
              className="w-14 h-14 rounded-lg" 
            />
          </div>
        </div>
      
        {/* SearchBar 컴포넌트 */}
        <SearchBar 
          readBookTitle={readBookTitle} // 책 이름을 props로 전달
          setReadBookTitle={setReadBookTitle} // 책 이름 업데이트 함수 전달
          onSearch={handleSearch} // 검색 함수 전달
        />
      </div>
    </div>
  );
}
