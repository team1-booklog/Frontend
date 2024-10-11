import { create } from 'zustand'

interface AuthState {
  username: string
  setUsername: (username: string) => void

  accessToken: string
  setAccessToken: (accessToken: string) => void

  isLogin: boolean
  login: (accessToken: string) => void
  logout: () => void

  duplicatedState: boolean
  setIsDuplicated: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,

  username: '',
  setUsername: (username) => set({ username, isLogin: true }),

  accessToken: '',
  setAccessToken: (token) => set({ accessToken: token }),

  login: (accessToken: string) => {
    set({ accessToken, isLogin: true })
  },
  logout: () => set({ isLogin: false, accessToken: undefined }),

  duplicatedState: false,
  setIsDuplicated: () =>
    set((state) => ({ duplicatedState: !state.duplicatedState })),
}))
