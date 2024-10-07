import AuthHeader from '../components/auth/AuthHeader'
import AuthImg from '../assets/images/AuthImg.svg'
//import { AuthForm } from '../components/auth/AuthForm'
import LoginForm from '../components/auth/LoginForm'

export default function Login() {
  return (
    <div className="h-dvh">
      <AuthHeader />
      <div className="pt-12 2xl:pt-32 py-2">
        <div className="relative flex flex-col 2xl:flex-row gap-12 2xl:gap-36 items-center justify-center">
          <img
            src={AuthImg}
            alt="AuthImg"
            className="w-40 md:w-[444px] h-24 md:h-64"
          />
          <div className="w-72 md:w-[600px] h-32 md:h-full">
            <div className="flex flex-col gap-7 md:gap-12">
              <p className="font-semibold text-3xl text-[#2B5877]">로그인</p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
