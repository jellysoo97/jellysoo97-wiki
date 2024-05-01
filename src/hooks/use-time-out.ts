import { useEffect } from 'react'

export const useTimeOut = (
  trigger: boolean,
  duration: number,
  callback: () => void
) => {
  useEffect(() => {
    let timeOut: NodeJS.Timeout

    if (trigger) {
      timeOut = setTimeout(callback, duration)
    }

    return () => {
      timeOut && clearInterval(timeOut)
    }
  }, [trigger])
}
