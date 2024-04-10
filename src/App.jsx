import { useState } from 'react'
import VoiceInput from "./Components/VoiceInput";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className=' bg-red-800 p-4 text-white'>hello its me</h2>
    <VoiceInput/>
    </>
  )
}

export default App
