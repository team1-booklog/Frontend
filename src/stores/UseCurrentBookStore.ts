import { create } from 'zustand'

interface CurrentBookState {
  bookId: string | null
  setBookId: (bookId: string | null) => void
}

export const useCurrentBookState = create<CurrentBookState>((set) => ({
  bookId: null,
  setBookId: (bookId) => set({ bookId }),
}))
