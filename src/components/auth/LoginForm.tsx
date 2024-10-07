import { UseFormRegister, FieldErrors } from 'react-hook-form'
import LoginInput from './LoginInput'
import AuthBtn from './AuthBtn'
import { AuthCredentials } from '../../model/Auth'
import User from '../../assets/icons/User.svg'
import Lock from '../../assets/icons/Lock.svg'

interface LoginFormProps {
  register: UseFormRegister<AuthCredentials>
  errors: FieldErrors<AuthCredentials>
}

export default function LoginForm({ register, errors }: LoginFormProps) {
  return (
    <div className="flex flex-col md:gap-5">
      <div className="flex flex-col gap-2">
        <LoginInput
          icon={User}
          placeholder="아이디를 입력해 주세요"
          register={register}
          name="username"
        />
        <LoginInput
          icon={Lock}
          placeholder="영문+숫자 8자리 이상의 비밀번호를 입력해 주세요"
          register={register}
          name="password"
        />
        <div className="h-6">
          {(errors.username || errors.password) && (
            <p className="text-xs text-[#ec6b53]">
              아이디 또는 비밀번호를 다시 확인하세요
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <AuthBtn name="로그인" type="submit" />
        <AuthBtn name="회원가입" type="button" />
      </div>
    </div>
  )
}
