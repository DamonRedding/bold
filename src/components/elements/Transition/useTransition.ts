import { useEffect, useState } from 'react'

export type TransitionState = 'unmounted' | 'entering' | 'entered' | 'exiting' | 'exited'

export const useTransition = (enter: boolean, timeout = 1) => {
  const [state, setState] = useState<TransitionState>('unmounted')

  useEffect(() => {
    if (enter) {
      setState('entering')
      setTimeout(() => setState('entered'), timeout)
    } else {
      setState('exiting')
      setTimeout(() => setState('exited'), timeout)
    }

    return () => {
      setState('unmounted')
    }
  }, [enter])

  return state
}