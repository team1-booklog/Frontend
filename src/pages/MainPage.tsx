import { useState, useEffect } from 'react';
import  MagnifyingGlass from '../assets/icons/MagnifyingGlass.svg';
import cn from '../libs/cn.ts';

export default function MainPage() {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("searchText changed: ", searchText);
  }, [searchText]);

  return (
    <>
    <div className={cn(
      "relative w-full flex-col justify-center text-center",
      "flex flex-col items-center mt-10 md:mt-20 gap-3 md:gap-6",
      "w-fit font-rockwell font-normal"
    )}>
      <h1 className="w-fit text-3xl md:text-5xl xl:text-8xl text-[#2B5877]">
        BookLog
      </h1>
      <h2 className="w-fit text-base md:text-2xl xl:text-4xl text-[#918F8F]">
        join our community and share your book reviews.
      </h2>
    </div>

    {/* 검색 바 */}
    <div className={cn(
      "relative w-full flex justify-center items-center mt-6 md:mt-20 gap-2",
      "font-rockwell font-normal"
    )}>
      <div className='border-b-2 border-[#2B5877]'>
        <input
          type="text"
          placeholder="궁금한 책 제목이나 저자를 검색해보세요!"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={cn(
            "w-[300px] sm:w-[600px] xl:w-[1200px] p-2 inline-block text-center",
            "text-base md:text-xl xl:text-3xl"
          )}
        />
        <button
          onClick={() => alert("Search for " + searchText)}
          className="ml-0 md:ml-2"
        >
          <img src={MagnifyingGlass} alt="Search" className="w-4 md:w-6 h-4 md:h-6" />
        </button>
      </div>
    </div>
    </>
  );
}