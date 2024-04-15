import { useState } from 'react'
import VoiceInput from "./Components/VoiceInput";


function App() {
 

  return (
    <div className=" h-screen  flex items-center justify-between flex-col bg-slate-900 ">
      <h1 className=' text-5xl text-white mt-4'>Sound Solver</h1>
      
      <div className='h-1/2 w-1/3'>
      <VoiceInput />
      </div>

      <div className='Footer  h-1/4 w-full bg-red-700 '>
      This is the footer of this web page
      it will contain the footer part
      </div>
    </div>
  );
}

export default App
