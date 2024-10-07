import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthCredentials } from '../../model/Auth'
import { useAuth } from '../../hooks/UseAuth'
import { login } from '../../services/AuthService'
import User from '../../assets/icons/User.svg'
import Lock from '../../assets/icons/Lock.svg'
import AuthBtn from './AuthBtn'

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
          <div className="flex flex-row border-b-[1px] border-b-[#918f8f] gap-4">
            <img src={User} alt="UserIcon" className="p-2" />
            <input
              {...register('username')}
              className="w-full placeholder-[#918f8f]"
              placeholder="아이디를 입력해 주세요"
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="flex flex-row border-b-[1px] border-b-[#918f8f] gap-4">
            <img src={Lock} alt="LockIcon" className="p-2" />
            <input
              type="password"
              {...register('password')}
              className="w-full"
              placeholder="영문+숫자 8자리 이상의 비밀번호를 입력해 주세요"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <AuthBtn name="로그인" type="submit" />
          <AuthBtn name="회원가입" type="button" />
        </div>
      </div>
    </form>
  )
}
