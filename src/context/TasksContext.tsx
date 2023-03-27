"use client"
import { createContext } from 'react'
import { TaskContextType } from '@/typings/global'

const TasksContext = createContext<TaskContextType>({
  tasks: [],
  createTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
})

export default TasksContext

