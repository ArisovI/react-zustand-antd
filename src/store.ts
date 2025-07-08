import { create } from 'zustand'
import type { TodoItem } from './App'
import { persist } from 'zustand/middleware'

type TStore = {
  todos: TodoItem[]
  add: (todo: TodoItem) => void
}

export const useStore = create<TStore>()(
  persist(
    (set) => ({
      todos: [],
      add: (todo: TodoItem) =>
        set((state) => ({ todos: [...state.todos, todo] })),
    }),
    { name: 'todos-storage' },
  ),
)
