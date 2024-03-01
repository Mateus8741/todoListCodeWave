import { useState } from 'react'

import { CardsProps } from '@/components'
import { useStorage } from './useStorage'

export function useTaskManager() {
  const [tasks, setTasks] = useState<CardsProps[]>([])

  const { addTask: add, setIsCompleted: toggle } = useStorage()

  const addTask = (taskText: string) => {
    const newTask: CardsProps = {
      title: taskText,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])

    add(newTask)
  }

  const setTaskCompleted = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.isCompleted } : task,
    )

    setTasks(updatedTasks)

    toggle(id)
  }

  return {
    addTask,
    setTaskCompleted,
  }
}
