import { useEffect } from 'react'

/**
 * Execute the callback every frame. If there is no callback, stop.
 */
export const useFrame = (callback?: (time: number) => void) => {
  useEffect(() => {
    if (!callback) return

    let id: number
    const update: FrameRequestCallback = (time) => {
      callback(time)
      id = requestAnimationFrame(update)
    }
    id = requestAnimationFrame(update)

    return () => cancelAnimationFrame(id)
  }, [callback])
}
