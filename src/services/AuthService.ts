import { AuthRequest } from '../model/AuthRequest'
import { AuthResponse } from '../model/AuthResponse'
import { LoginRequest } from '../model/LoginRequest'
import apiClient from '../config/ApiClient'
import { LoginResponse } from '../model/LoginResponse'
import { ReissueRequest } from '../model/ReissueRequest'
import { ReissueResponse } from '../model/ReissueResponse'
import { useAuthStore } from '../stores/UseCurrentUserStore'

const { setAccessToken } = useAuthStore()

export const maintainLoginState = async () => {
  const storedRefreshToken = localStorage.getItem('refreshToken')

  if (storedRefreshToken) {
    try {
      const newAccessToken = await reissueAccessToken({
        refreshToken: storedRefreshToken,
      })
      setAccessToken(newAccessToken)
    } catch (error: any) {
      if (error.response.status === 404) {
        alert('유효한 토큰을 찾을 수 없습니다.')
      }
      console.error('서버 에러', error)
    }
  }
}

export const reissueAccessToken = async (
  refreshToken: ReissueRequest
): Promise<string> => {
  try {
    const response = await apiClient.post<ReissueResponse>(
      '/auth/reissue',
      refreshToken
    )
    return response.data.accessToken
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      alert('유효한 토큰을 찾을 수 없습니다.')
    } else {
      console.error('서버 통신 실패', error)
    }
    throw error
  }
}

export const signUp = (user: AuthRequest) => {
  return apiClient.post<AuthResponse>('/users/signup', user)
}

export const login = async (user: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>('/auth/login', user)
    localStorage.setItem('refreshToken', response.data.refreshToken)
    return response.data
  } catch (error: any) {
    if (error.response.status === 400) {
      alert('비밀번호가 일치하지 않습니다.')
    } else if (error.response.status === 404) {
      alert('존재하지 않는 유저입니다.')
    } else {
      console.error('서버 통신 실패', error)
    }
    throw error
  }
}

export const checkDuplicateId = async (username: string) => {
  // 추후 중복검사 로직 추가 예정
  console.log('중복검사 중인 아이디:', username)
  // 임시 아이디
  const isExists = username === 'user1'
  return isExists
}
