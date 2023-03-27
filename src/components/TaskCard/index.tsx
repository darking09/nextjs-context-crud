import React from 'react'
import { TaskCardProps } from '@/typings/global'

import useTasksCard from './useTasksCard'

const TaskCard = ({ task } : TaskCardProps) => {
  const { handleDelete, goToEdit } = useTasksCard()

  return (
    <div
      className="bg-gray-700 hover:bg-gray-500 cursor-pointer px-20 py-5 m-2 rounded-md"
      onClick={() => goToEdit(task.id) }
    >
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <button
          className="bg-red-500 hover:bg-red-400 text-gray-50 px-5 py-2 font-bold rounded-md inline-flex items-center"
          onClick={handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  )
}

export default TaskCard
