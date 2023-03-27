'use client'
import React from 'react'

import { FormProps } from '@/typings/global'

import useTaskForm from './useTaskForm'

const TaskForm = ({id} : FormProps) => {
  const { errors, onSubmit, register } = useTaskForm(id)

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <h2>New Task</h2>
        <input
          type="text"
          className="bg-gray-800 text-white py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder='Write a title'
          {...register('title', { required: true })}
        />
        {
          errors.title && <span className="block text-red-400 mb-2">This field is required</span>
        }
        <textarea
          placeholder='Write a little description'
          className="bg-gray-800 text-white py-3 px-4 mb-2 block focus:outline-none w-full"
          {...register('description', { required: true })}
        />
        {
          errors.description && <span className="block text-red-400 mb-2">This field is required</span>
        }
        <button type='submit' className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">Save</button>
      </form>
    </div>

  )
}

export default TaskForm
