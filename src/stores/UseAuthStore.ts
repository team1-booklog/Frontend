import { create } from 'zustand'

interface AuthState {
  token: string | null
  setToken: (token: string | null) => void
  isLogin: boolean
  login: (token: string) => void
  duplicatedState: boolean
  setIsDuplicated: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),

  isLogin: false,

  login: (token: string) => {
    set({ token, isLogin: true })
  },
  logout: () => set({ isLogin: false, token: null }),

  duplicatedState: false,
  setIsDuplicated: () =>
    set((state) => ({ duplicatedState: !state.duplicatedState })),
}))
