import AuthHeader from '../components/auth/AuthHeader'
import LoginImg from '../assets/images/LoginImg.svg'
import { LoginForm } from '../components/auth/LoginForm'

export default function Login() {
  return (
    <>
      <AuthHeader />
      <div className="relative flex flex-col 2xl:flex-row gap-20 2xl:gap-36 mt-6 2xl:mt-32 items-center 2xl:px-80">
        <img
          src={LoginImg}
          alt="LoginImg"
          className="w-48 md:w-[444px] h-24 md:h-64 md:mt-24"
        />
        <div className="w-72 md:w-[600px] h-32 md:h-full">
          <div className="flex flex-col gap-12">
            <p className="font-semibold text-3xl text-[#2B5877]">로그인</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}
