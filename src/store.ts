import { create } from 'zustand'

type User = {
  id: 1
  username: string
  email: string
  firstName: string
  lastName: string
  gender: 'female' | 'male'
  image: string
  accessToken: string
  refreshToken: string
}

type UserBody = {
  username: string
  password: string
}

type TStore = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  isError: boolean
  error: string | null
  isLoginFn: (body: UserBody) => unknown
}

export const useStore = create<TStore>(() => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  error: null,
  isLoginFn: async () => {},
}))
