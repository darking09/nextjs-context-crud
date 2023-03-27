import { useState, useEffect } from 'react'

import { Task, LocalStorage } from '@/typings/global'

const useLocalStorage = (key : string, initialState : Array<Task>) : LocalStorage => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const localState = localStorage.getItem(key)
    setState(localState ?  JSON.parse(localState) : initialState)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])

  useEffect(() => {
    if(state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return {
    state,
    setState
  }
}

export default useLocalStorage
