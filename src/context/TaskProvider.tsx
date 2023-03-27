"use client"
import useTaskContext from './useTaskContext'
import TasksContext from './TasksContext'
import { ContextProps } from '@/typings/global'

const TaskProvider = ({ children } : ContextProps) => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskContext()

  return (
    <TasksContext.Provider value={{tasks, createTask, deleteTask, updateTask}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskProvider
