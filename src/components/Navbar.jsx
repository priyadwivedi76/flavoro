import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex lg:flex-row flex-col justify-between items-center'>
      <div className='p-5'>
        <h1 className='font-semibold text-[1.3em]'>{new Date().toUTCString().slice(0,16)}</h1>
        <h1 className="font-semibold text-gray-400 text-[1.3em]">Welcome to Flavoro</h1>
      </div>
      <input type='search' placeholder='Search' className='bg-white h-10 p-5 m-5 border border-gray-300 border-2 rounded-lg w-full lg:w-54 outline-none'/>
    </div>
    <hr className='w-full h-[0.5px] bg-black-100 opacity-50'/>
    </>
  )
}

export default Navbar