import React from 'react'

const Third = () => {
  return (
    <div className="h-[90vh] bg-[url(last.jpg)] bg-cover bg-center">
        <div className="flex flex-col  gap-15    h-full w-full px-[60px] py-[30px]">
        <p className="text-[40px] text-[#ffffff] text-[ui-sans-serif]">contact us</p>
        <div>
            <span>
            <hr className="w-[100px] h-[5px] bg-[#ffffff]"/>
                </span>
                <span>
<hr/>
                </span>
        </div>
       
        <p className="text-base text-[#ffffff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere, doloribus fugit inventore error quo doloremque cum esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere, doloribus fugit inventore error quo doloremque cum esse?</p>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
                 <p className="text-base text-[#ffffff]">phone:01555204359</p>
                 <p className="text-base text-[#ffffff]">Location:location on map</p>
            </div>
            <div className="flex flex-col gap-3">
             <p className="text-base text-[#ffffff]">Email:youssefmansi2@gmail.com</p>
             <div className="flex flex-row gap-1">
             <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Send</button>
             </div>
            </div>

        </div>
        <p className="items-center text-center justify-self-start text-[18px] text-[#ffffff]">Copyright © 2019 Company Name - Design: <span>Youssef Mansi</span> Mo</p>
        </div>
        
        </div>
        
    
  )
}

export default Third