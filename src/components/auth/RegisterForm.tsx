import { useNavigate } from 'react-router-dom'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import AuthBtn from './AuthBtn'
import { AuthCredentials } from '../../model/Auth'
import RegisterInput from './RegisterInput'
import Back from '../../assets/icons/Back.svg'

interface RegisterFormProps {
  register: UseFormRegister<AuthCredentials>
  errors: FieldErrors<AuthCredentials>
}

export default function RegisterForm({ register, errors }: RegisterFormProps) {
  const navigate = useNavigate()

  const gotoLogin = () => {
    return navigate('/login')
  }

  return (
    <div className="flex flex-col md:gap-5">
      <div className="flex flex-col gap-2">
        <RegisterInput
          placeholder="아이디를 입력해 주세요"
          register={register}
          name="아이디"
        />
        <li className="ml-20 text-xs text-[#918f8f]">
          4-16자의 영문 소문자 혹은 영문+숫자를 입력해 주세요.
        </li>
        <RegisterInput
          placeholder="비밀번호를 입력해 주세요"
          register={register}
          name="비밀번호"
        />
        <li className="ml-20 text-xs text-[#918f8f]">
          영문+숫자 8자리 이상의 비밀번호를 입력해 주세요.
        </li>
        <div className="h-6">
          {(errors.username || errors.password) && (
            <p className="text-xs text-[#ec6b53]">
              아이디 또는 비밀번호를 다시 확인하세요
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AuthBtn name="회원가입" type="submit" />
        <button
          type="button"
          onClick={gotoLogin}
          className="flex flex-row w-20 h-fit gap-2 items-center"
        >
          <img src={Back} alt="BackIcon" className="w-5 h-5" />
          <p className="text-sm text-nowrap">돌아가기</p>
        </button>
      </div>
    </div>
  )
}
