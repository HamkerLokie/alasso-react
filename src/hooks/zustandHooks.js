import { useState, useEffect } from 'react'

export function useGetFromStore (store, callback) {
  const result = store(callback)
  const [state, setState] = useState()

  useEffect(() => {
    setState(result)
  }, [result])

  return state
}
