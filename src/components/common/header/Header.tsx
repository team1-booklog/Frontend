import { useNavigate } from 'react-router-dom'
import { PiSignIn, PiSignOut } from 'react-icons/pi'
import cn from '../../../libs/cn.ts'

interface HeaderProps {
  isBordered?: boolean
}

export default function Header({ isBordered }: HeaderProps) {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/')
  }
  const handleUserNameClick = () => {
    navigate('/mypage')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }

  // 임시로 땜방한 로그인 여부, 유저네임
  const isLogin = true
  const userName = '홍길동'

  return (
    <header
      className={cn(
      'bg-[#2B5877] text-white p-5', 
      `${isBordered && 'fixed w-full rounded-b-3xl z-50'}`
    )}
    >
      <div className="flex justify-between mx-0 md:mx-20">
        <h1 onClick={handleLogoClick} className="text-3xl ">
          Booklog
        </h1>
        {isLogin ? (
          <div>
            <span
              onClick={handleUserNameClick}
              className="mr-4 md:mr-14 text-base md:text-xl"
            >
              {userName} 님
            </span>
            <button
              className={cn(
                'bg-white px-3 md:px-4 py-2 rounded-lg text-[#EC6B53] font-bold'
              )}
            >
              <PiSignOut className="text-base md:text-2xl inline" />
              로그아웃
            </button>
          </div>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-white px-4 py-2 rounded-lg text-[#EC6B53] font-bold"
          >
            <PiSignIn className="text-base md:text-2xl inline" />
            로그인
          </button>
        )}
      </div>
    </header>
  )
}
