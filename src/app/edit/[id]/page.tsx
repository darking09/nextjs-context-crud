import React from 'react'
import TaskForm from '@/components/TaskForm';
import { EditParams } from '@/typings/global';


const Edit = ({params}: EditParams) => {
  return (
    <TaskForm id={params.id}/>
  )
}

export default Edit
