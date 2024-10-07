import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { useAuthForm } from '../../hooks/UseAuthForm'

export const AuthForm = () => {
  const { isRegister, register, handleSubmit, errors, onSubmit } = useAuthForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isRegister ? (
        <RegisterForm />
      ) : (
        <LoginForm register={register} errors={errors} />
      )}
    </form>
  )
}
