import React from 'react'

const SecondBottom = () => {
  return (
    <div className="flex flex-col gap-5 p-5 text-center items-center">
      <p className="text-[40px] text-[#4169E1]">Our Work</p>
      <p className="text-base text-[#666666]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Asperiores labore corrupti autem reiciendis! Asperiores, mollitia. </p>
      <div className="flex flex-row gap-5">
        <img src="1.jpg" width="200px" height="225px" alt="" />
        <img src="2.jpg" width="200px" height="225px" alt="" />
        <img src="3.jpg" width="200px" height="225px" alt="" />
        <img src="4.jpg" width="200px" height="225px" alt="" />
        <img src="5.jpg" width="200px" height="225px" alt="" />
      </div>
    </div>
  )
}

export default SecondBottom