import AsyncStorage from '@react-native-async-storage/async-storage'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Task } from './useTasks'

interface TaskStore {
  tasks: Task[]
  addTask: (task: Task) => void
  setIsCompleted: (id: number) => void
  cleanTasks: () => void
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
      cleanTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export function useStorage() {
  const { tasks, addTask, setIsCompleted, cleanTasks } = useStore()

  return { tasks, addTask, setIsCompleted, cleanTasks }
}
