import React from 'react'

const Header = () => {
  return (
    <div className="bg-[url(https://townproduction.vercel.app/static/media/the-town-bg-01.4fb1a448e9b51ceb326a.jpg)] bg-cover bg-center p-[20px] h-screen ">
    <div className="flex flex-col w-full gap-50 ">


      <div className="flex flex-row justify-between">
      
      <div>
<h1 className="text-2xl font-[cursive] text-white">Online</h1>
      </div>
      <div className="flex flex-row justify-between gap-3" >
<h1 className="text-2xl font-[cursive] text-[#4169E1]">Intoduction</h1>
<h1 className="text-2xl font-[cursive] text-white">Our contact</h1>
<h1 className="text-2xl font-[cursive] text-white">About us</h1>
      </div>
      </div>



      <div className="flex flex-col gap-3 self-center text-center">
       <h1 className="text-5xl font-[sans-serif] text-white">The Town</h1>
       <h1 className="text-base font-[sans-serif] text-white">Website html,css</h1>
       <h1 className="text-base font-[sans-serif] text-white">By <span className="text-[#4169E1]">youssef mansi</span></h1>
      </div>


    </div>
    </div>
    
  )
}

export default Header