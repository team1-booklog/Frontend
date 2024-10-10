import { useNavigate } from 'react-router-dom'

interface AuthBtnProps {
  name: string
  type: 'submit' | 'button' | 'reset'
  onClick?: () => void
}

export default function AuthBtn({ name, type, onClick }: AuthBtnProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (name === '회원가입' && type === 'button') {
      navigate('/register')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`group h-16 rounded-2xl 
        ${
          name === '로그인'
            ? 'bg-[#2B5877] hover:bg-opacity-60'
            : name === '회원가입' && type === 'button'
              ? 'bg-[#ffffff] border-2 border-[#2B5877] hover:bg-[#7C97A9] hover:border-none'
              : name === '회원가입' && type === 'submit'
                ? 'bg-[#2B5877] hover:bg-opacity-60'
                : ''
        }`}
    >
      <p
        className={`text-xl 
          ${
            name === '회원가입' && type === 'button'
              ? 'text-[#2B5877] group-hover:text-[#fafafa]'
              : 'text-[#ffffff]'
          }`}
      >
        {name}
      </p>
    </button>
  )
}
