import { useState } from 'react'
import VoiceInput from "./Components/VoiceInput";


function App() {
 

  return (
    <div className=" h-screen  flex items-center justify-center flex-col bg-slate-900 gap-4">
      <h1 className=' text-5xl text-white'>Voice Calculator</h1>
      
      <div className='h-1/2 w-1/3'>
      <VoiceInput />
      </div>
    </div>
  );
}

export default App
