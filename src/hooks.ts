import { useStore } from './store'

export const useSelectorTodos = () => {
  const todos = useStore((state) => state.todos)

  return { todos }
}

export const useSelectorAddFn = () => {
  const add = useStore((state) => state.add)

  return { add }
}