import { create } from 'zustand'
import type { TodoItem } from './App'

type TStore = {
  todos: TodoItem[]
  add: (todo: TodoItem) => void
}

export const useStore = create<TStore>((set) => ({
  todos: [],
  add: (todo: TodoItem) => set((state) => ({ todos: [...state.todos, todo] })),
}))
