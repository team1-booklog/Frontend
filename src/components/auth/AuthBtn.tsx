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
      className={`h-16 rounded-2xl ${name === '로그인' ? 'bg-[#2B5877]' : 'bg-[#ffffff] border-2 border-[#2B5877]'}`}
    >
      <p
        className={`text-xl ${name === '로그인' ? 'text-[#fafafa]' : 'text-[#2B5877]'}`}
      >
        {name}
      </p>
    </button>
  )
}
