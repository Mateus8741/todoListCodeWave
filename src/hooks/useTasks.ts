import { useState } from 'react'

import { useStorage } from './useStorage'

export interface Task {
  id: number
  title: string
  isCompleted: boolean
}

export function useTaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])

  const { addTask: add, setIsCompleted: toggle, tasks: tks } = useStorage()

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: tks.length,
      title: taskText,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])

    add(newTask)
  }

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.isCompleted } : task,
    )

    setTasks(updatedTasks)

    toggle(id)
  }

  return {
    addTask,
    toggleTask,
  }
}
