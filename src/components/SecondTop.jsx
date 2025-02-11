import React from 'react'

const SecondTop = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly">


    <div className="SecondTop flex flex-row justify-evenly  ">
        <div className="">
<img src="town.jpg" width="490px" alt="hh" />
        </div>
        <div className="flex flex-col justify-between">
        <p className='text-[40px] text-[san-serif] text-[#4169E1]'>Introduction</p>
            <p className='text-base text-[san-serif] text-[#777777]'>The Town is <span className="text-[#777777]">simple CSS template</span> built on HTML CSS <br/> and this is a little parallax layout that you can use for <br/>your website</p>
            
            <p className='text-base text-[san-serif] text-[#777777]' >please tell your friends about our site <span className="text-[#007bff]">YourSite.</span> Thank <br/>you. Lorem, ipsum dolor sit amet consectetur adipisicing <br/>elit. Itaque, nisi tenetur.</p>
            {/* <p className="border-1 text-center rounded-full w-[105px] h-[38px] bg-[#007bff] py-[6px] px-[12px]">Read more</p> */}
            <button className="btn btn-primary btn-xs w-[105px] h-[38px]">Primary</button>
        </div>
    </div>


<div className="secondBottom h-[40%] bg-gradient-to-b from-[#e3987f] to-[#5c648c] w-full flex flex-row justify-evenly items-center ">

<div className="flex flex-col justify-evenly w-[calc(85%/3)] text-center">  
    <p className="text-4xl text-white">First work</p>
    <p className="text-2xl text-[#4169E1]">click to show</p>
    <p className="text-base text-[#CDC1C1]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.</p>
</div>
<div className="flex flex-col justify-evenly w-[calc(85%/3)] text-center">
<p className="text-4xl text-white">Second work</p>
    <p className="text-2xl text-[#4169E1]">click to show</p>
    <p className="text-base text-[#CDC1C1]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.</p>
</div>
<div className="flex flex-col justify-evenly w-[calc(85%/3)] text-center">
<p className="text-4xl text-white">Third work</p>
    <p className="text-2xl text-[#4169E1]">click to show</p>
    <p className="text-base text-[#CDC1C1]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.</p>
</div>





</div>



    </div>
  )
}

export default SecondTop