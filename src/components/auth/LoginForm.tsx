import { useForm } from 'react-hook-form'
import LoginInput from './LoginInput'
import AuthBtn from './AuthBtn'
import { AuthCredentials } from '../../model/Auth'
import User from '../../assets/icons/User.svg'
import Lock from '../../assets/icons/Lock.svg'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>()

  const onSubmit = (data: AuthCredentials) => {
    if (!data.username || !data.password || !data.confirmPassword) {
      alert('모든 필드를 입력해 주세요.')
      return
    }

    console.log('로그인 데이터:', data)
  }

  return (
    <div className="flex flex-col md:gap-5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  )
}
