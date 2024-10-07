interface AuthBtnProps {
  name: string
  type: 'submit' | 'button' | 'reset'
  onClick?: () => void
}

export default function AuthBtn({ name, type, onClick }: AuthBtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group h-16 rounded-2xl ${name === '로그인' ? 'bg-[#2B5877] hover:bg-opacity-60' : 'bg-[#ffffff] border-2 border-[#2B5877] hover:bg-[#7C97A9] hover:border-none'}`}
    >
      <p
        className={`text-xl ${name === '로그인' ? 'text-[#ffffff]' : 'text-[#2B5877] group-hover:text-[#fafafa]'}`}
      >
        {name}
      </p>
    </button>
  )
}
