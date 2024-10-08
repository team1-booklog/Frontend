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
    <div className="p-5 flex justify-center items-center">
      <div className="mr-10 text-left max-w-36">
        <h2 className='text-2xl text-[#2B5877]'>썸네일</h2>
        <img 
          src={thumbnail || DefaultThubnail} 
          alt="썸네일" 
          className="w-36 h-36 rounded-xl" 
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
            "mt-2 block w-full text-sm text-gray-900 border border-gray-300",
            "rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          )}
        >
          썸네일 교체
        </button>
      </div>

      <div className="flex-1 text-left max-w-4xl">
        <div className="mb-5">
          <h2 className="text-2xl text-[#2B5877] mb-2">제목</h2>
          <input
            id="title" 
            type="text" 
            placeholder="제목을 입력하세요" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
          />
        </div>

        {/* 분리된 SearchBar 컴포넌트 사용 */}
        <SearchBar 
          readBookTitle={readBookTitle} // 책 이름을 props로 전달
          setReadBookTitle={setReadBookTitle} // 책 이름 업데이트 함수 전달
          onSearch={handleSearch} // 검색 함수 전달
        />
      </div>
    </div>
  );
}
