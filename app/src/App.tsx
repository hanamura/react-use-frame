import { useState } from 'react'

import { useFrame } from '../../src'

export const App = () => {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  useFrame(running ? () => setCount((count) => count + 1) : undefined)

  return <button onClick={() => setRunning((r) => !r)}>Toggle {count}</button>
}
