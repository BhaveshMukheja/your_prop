import React from 'react'

const StackDesign = () => {
  return (
  <div className="relative h-96 flex justify-center items-center ">
  <div className="absolute top-[20px]  h-64 w-[74%] z-10">
    <div className="h-full bg-brand-faded rounded-3xl shadow-[0_-5px_30px_rgba(0,0,0,0.25)]"></div>
  </div>
  <div className="absolute top-[35px] h-64 w-[76%] z-20">
    <div className="h-full bg-brand-faded  rounded-3xl shadow-[0_-5px_25px_rgba(0,0,0,0.25)]"></div>
  </div>
  <div className="absolute top-[55px] h-64 w-[78%] z-30">
    <div className="h-full bg-brand-faded  rounded-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.25)]"></div>
  </div>
    <div className="absolute top-[75px] right-[-px] h-64 w-[80%] z-50">
    <div className="h-full bg-brand-faded  rounded-3xl shadow-[0_-5px_15px_rgba(0,0,0,0.25)]"></div>
  </div>
</div>
  )
}

export default StackDesign