import { PiSignIn, PiSignOut } from "react-icons/pi";
import cn from '../../libs/cn.ts';
export default function Header() {
  // 임시로 땜방한 로그인 여부, 유저네임
  const isLogin = true;
  const userName = '홍길동';
  
  return (
    <header className="bg-[#2B5877] text-white p-4">
      <div className="flex justify-between mx-0 md:mx-20">
      <h1 className="text-3xl ">Booklog</h1>
      {isLogin ?
        <div>
          <span className="mr-14 text-sm md:text-xl">
            {userName} 님
          </span>
          <button className={cn(
            "bg-white px-3 md:px-4 py-2 rounded-lg text-[#EC6B53] font-bold"
          )}>
            <PiSignOut className="text-base md:text-2xl inline"/>
            로그아웃
          </button> 
        </div>     
      :  
        <button className="bg-white px-4 py-2 rounded-lg text-[#EC6B53] font-bold">
          <PiSignIn className="text-base md:text-2xl inline"/>
          로그인
        </button>    
      }
      </div>
    </header>
  );
}
