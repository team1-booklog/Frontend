import { UseFormRegister } from 'react-hook-form'

interface AuthInputProps {
  icon: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  error?: string
}

export default function AuthInput({
  icon,
  placeholder,
  register,
  name,
  error,
}: AuthInputProps) {
  return (
    <div className="flex flex-row border-b-[1px] border-b-[#918f8f] gap-4">
      <img src={icon} alt="Input Icon" className="p-2" />
      <input
        {...register(name)}
        className="w-full placeholder-[#918f8f] focus:outline-none"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
