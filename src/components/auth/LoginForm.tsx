import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthCredentials } from '../../model/Auth'
import { useAuth } from '../../hooks/UseAuth'
import { login } from '../../services/AuthService'
import User from '../../assets/icons/User.svg'
import Lock from '../../assets/icons/Lock.svg'
import AuthBtn from './AuthBtn'
import AuthInput from './AuthInput'

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

export const LoginForm = () => {
  const { login: authLogin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentials>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: AuthCredentials) => {
    try {
      const token = await login(data)
      authLogin(token)
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <AuthInput
            icon={User}
            placeholder="아이디를 입력해 주세요"
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <AuthInput
            icon={Lock}
            placeholder="영문+숫자 8자리 이상의 비밀번호를 입력해 주세요"
            register={register}
            name="password"
            error={errors.password?.message}
          />
        </div>
        <div className="flex flex-col gap-2">
          <AuthBtn name="로그인" type="submit" />
          <AuthBtn name="회원가입" type="button" />
        </div>
      </div>
    </form>
  )
}
