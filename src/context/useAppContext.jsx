import { useContext } from 'react'
import TasksContext from '@/context/TasksContext'

function useAppContext() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useAppContext must be used within a TasksProvider');
  }
  return context;
}

export default useAppContext
