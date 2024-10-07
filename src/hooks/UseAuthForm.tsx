import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from './UseAuth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthCredentials } from '../model/Auth'
import { login } from '../services/AuthService'

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

export const useAuthForm = () => {
  const location = useLocation()
  const isRegister = location.pathname === '/register'

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

  return {
    isRegister,
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
