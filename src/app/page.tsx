'use client'
import React from 'react'
import TaskCards from '@/components/TaskCards'

import useAppContext from '@/context/useAppContext'

const Index = () => {
  const { tasks } = useAppContext()

  return (
    <TaskCards tasks={tasks} />
  )
}

export default Index
