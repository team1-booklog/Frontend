import { useAuthStore } from '../stores/UseAuthStore'

export const useAuth = () => {
  const { token, setToken, logout } = useAuthStore()

  const login = (token: string) => {
    setToken(token)
  }

  return {
    token,
    login,
    logout,
  }
}
