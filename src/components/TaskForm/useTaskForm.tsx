'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, FieldValues } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Task } from '@/typings/global'
import useAppContext from '@/context/useAppContext'

const useTaskForm = (id : string | undefined) => {
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const { tasks, createTask, updateTask } = useAppContext()

  useEffect(() => {
    if (id) {
      const taskFound = tasks.find((task) => task.id === id)
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  /**
   * Handle submit of the form
   * @param e - event of the form submit
   */
  const onSubmit = handleSubmit((data) => {
    if (data) {
      if (id) {
        updateTask(editTaskParams(data))
        toast.success('Task updated successfully')
      }
      if (!id) {
        createTask(createNewTask(data))
        toast.success('Task created successfully')
      }

      router.push('/')
    }
  })
  /**
   * Edit task params
   * @param originTask - task to edit
   * @returns {Task} edited task
   */
  const editTaskParams = ({description, title} : FieldValues) : Task => {
    return {
      id: id || '',
      description,
      title,
    }
  }

  /**
   * Create new task
   * @param {string} name - name of the input
   * @param {string} value - value of the input
   * @returns {Task} new task
   */
  const createNewTask = ({description, title} : FieldValues) : Task => {
    const emptyTask : Task = createEmptyTask()

    return {
      ...emptyTask,
      description,
      title,
    }
  }

  /**
   * Create empty task
   * @returns {Task} empty task
   */
  function createEmptyTask() : Task {
    return {
      id: '',
      title: '',
      description: '',
    }
  }

  return {
    onSubmit,
    register,
    errors,
  }
}

export default useTaskForm
