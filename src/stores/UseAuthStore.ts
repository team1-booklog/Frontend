import { create } from 'zustand'

interface AuthState {
  token: string | null
  setToken: (token: string | null) => void
  duplicatedState: boolean
  setIsDuplicated: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  duplicatedState: false,
  setIsDuplicated: () =>
    set((state) => ({ duplicatedState: !state.duplicatedState })),

  logout: () => set({ token: null }),
}))
