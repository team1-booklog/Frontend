import axios from 'axios'
import { useAuthStore } from '../stores/UseCurrentUserStore'
import { maintainLoginState } from '../services/AuthService'

const apiClient = axios.create({
  baseURL: 'http://58.238.255.245:8080/api/v1',
})

apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken } = useAuthStore.getState()

    if (!config.url?.includes('/login') && !config.url?.includes('/register')) {
      if (!accessToken) {
        try {
          await maintainLoginState()
        } catch (error) {
          console.error('로그인 상태 유지 실패:', error)
        }
      }

      const updatedAccessToken = useAuthStore.getState().accessToken
      if (updatedAccessToken) {
        config.headers.Authorization = `Bearer ${updatedAccessToken}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default apiClient
