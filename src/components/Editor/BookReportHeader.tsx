import { useState, useRef } from 'react';
import DefaultThubnail from '../../assets/images/DefaultThubnail.png';
import cn from '../../libs/cn';

export default function BookReportHeaderEditor() {
  const [title, setTitle] = useState<string>(''); 
  const [thumbnail, setThumbnail] = useState<string>('');
  const [readBookTitle, setReadBookTitle] = useState<string>('독후감에 쓸 책을 검색해보세요.');

  // 파일 선택 input에 접근하기 위한 ref 생성
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl); // 이미지 미리보기
    }
  };

  const handleThumbnailButtonClick = () => {
    fileInputRef.current?.click(); // 버튼 클릭 시 input 파일 선택 창 열기
  };

  return (
    <div className="p-5 flex justify-center items-center">
      {/* 썸네일 이미지 */}
      <div className="mr-10 text-left max-w-36">
        <h2 className='text-2xl text-[#2B5877]'>썸네일</h2>
        <img 
          src={thumbnail || DefaultThubnail} 
          alt="썸네일" 
          className="w-36 h-36 rounded-xl" 
        />
        
        {/* 파일 선택 input을 숨기고 ref로 접근 */}
        <input 
          ref={fileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleThumbnailChange} 
          className="hidden" // 인풋창 숨기기
        />

        {/* 버튼으로 파일 선택 창 열기 */}
        <button 
          onClick={handleThumbnailButtonClick}
          className={cn(
            "mt-2 block w-full text-sm text-gray-900 border border-gray-300",
            "rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          )}
        >
          썸네일 교체
        </button>
      </div>

      {/* 제목 및 읽은 책 제목 */}
      <div className="flex-1 text-left max-w-4xl">
        <div className="mb-5">
          <h2 className="text-2xl text-[#2B5877] mb-2">제목</h2>
          <input
            id="title" 
            type="text" 
            placeholder="제목을 입력하세요" 
            value={title} 
            onChange={handleTitleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl text-[#2B5877] block mb-2">읽은 책</h2>
          <div 
            id="read-book-title" 
            className="p-3 bg-gray-100 rounded-lg text-lg">
            {readBookTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
