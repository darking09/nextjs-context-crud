import {FormEvent} from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import useAppContext from '@/context/useAppContext'

export const useTasksCard = () => {
  const { deleteTask } = useAppContext()
  const router = useRouter()

  const handleDelete = (id : string) => {
    return (e : FormEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      deleteTask(id)
      toast.success('Task deleted successfully')
    }
  }

  const goToEdit = (id : string) => {
    router.push(`/edit/${id}`)
  }

  return {
    handleDelete,
    goToEdit
  }
}

export default useTasksCard
