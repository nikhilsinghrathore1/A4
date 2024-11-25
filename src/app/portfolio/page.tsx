import React from 'react'
// okay so in this i have to give the cli command and then also have to show the live preview and if they doesn't like it then i will also show them other options as well 
// on one side it will show the cli command and on the other side it will show the live preview 

const page = () => {
  return (
    <div className='w-full h-screen'>
      <div>
        live preview
      </div>
      <div className='w-full mt-1 h-[85%] '>
        <iframe className='w-full h-full' src="https://niko-arima.vercel.app/" ></iframe>
      </div>
      <div className='mt-2 w-full bg-black/10 h-[10%] flex items-center justify-center'>
      npx @nikochan256/create-studio ./
      </div>
    </div>
    
  )
}

export default page