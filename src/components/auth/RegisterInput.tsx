import { UseFormRegister } from 'react-hook-form'

interface RegisterInputProps {
  placeholder: string
  register: UseFormRegister<any>
  name: string
}

export default function RegisterInput({
  placeholder,
  name,
  register,
}: RegisterInputProps) {
  return (
    <div className={`flex flex-row ${name === '아이디' ? 'gap-8' : 'gap-4'}`}>
      <p className="py-5 text-lg text-nowrap">{name}</p>
      <div className="flex flex-row items-center border-b-[1px] border-b-[#918f8f] w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-3 focus:outline-none"
          {...register(name)}
        />
        {name === '아이디' && (
          <button className="w-20 h-8 items-center bg-[#2B5877] hover:bg-opacity-70 rounded-lg text-xs text-[#fafafa] text-nowrap">
            중복확인
          </button>
        )}
        {name === '비밀번호' && <div className="invisible w-20 h-8"></div>}
      </div>
    </div>
  )
}
