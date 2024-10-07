import { UseFormRegister } from 'react-hook-form'

interface AuthInputProps {
  icon: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
}

export default function AuthInput({
  icon,
  placeholder,
  register,
  name,
}: AuthInputProps) {
  return (
    <div className="flex flex-row border-b-[1px] border-b-[#918f8f] gap-4 py-4 px-3">
      <img src={icon} alt="Input Icon" className="" />
      <input
        {...register(name)}
        className="w-full placeholder-[#918f8f] focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}
