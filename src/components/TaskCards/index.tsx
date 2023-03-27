import React from 'react'
import TaskCard from '@/components/TaskCard'

import { TaskCardsProps } from '@/typings/global'

const TaskCards = ({tasks}: TaskCardsProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        }
      </div>
    </div>
  )
}

export default TaskCards
