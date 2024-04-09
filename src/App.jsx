import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SimpleLineChart from './components/SimpleLineChart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <SimpleLineChart/>
</div>
    </>
  )
}

export default App
