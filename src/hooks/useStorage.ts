import { CardsProps } from '@/components'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface TaskStore {
  tasks: CardsProps[]
  addTask: (task: CardsProps) => void
  setIsCompleted: (id: number) => void
}

const useStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      setIsCompleted: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task, index) =>
            index === id ? { ...task, isCompleted: !task.isCompleted } : task,
          ),
        })),
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function useStorage() {
  const { tasks, addTask, setIsCompleted } = useStore()

  return { tasks, addTask, setIsCompleted }
}
