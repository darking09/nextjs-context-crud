import useLocalStorage from '@/hooks/useLocalStorage'
import { v4 as uuid } from 'uuid'
import { Task } from '@/typings/global'

const useTaskContext = () => {
  const {state, setState} = useLocalStorage('tasks', []);

  /**
   * Create a new task and add to the list of tasks
   * @param task - task to create
   */
  const createTask = (task: Task) => {
    setState([
      ...state, {...task, id: uuid()}
    ])
  }

  /**
   * Delete a task from the list of tasks
   * @param id - id of the task to delete
   * @returns {void}
   */
  const deleteTask = (id: string) => {
    setState([
      ...state.filter((task) => task.id !== id)
    ])
  }

  /**
   * Update a task from the list of tasks
   * @param task - task to update
   * @returns {void}
   */
  const updateTask = (task: Task) => {
    setState([
      ...state.map((t) => t.id === task.id ? task : t)
    ])
  }

  return {
    tasks: state,
    createTask,
    deleteTask,
    updateTask,
  }
}

export default useTaskContext
