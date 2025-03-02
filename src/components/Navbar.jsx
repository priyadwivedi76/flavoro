import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
    <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center'>
      <div className='p-5'>
        <h1 className='font-semibold text-[1.3em]'>{new Date().toUTCString().slice(0,16)}</h1>
        <h1 className="font-semibold text-gray-400 text-[1.3em]">Welcome to Flavoro</h1>
      </div>
      <input type='search' placeholder='Search' onChange={(e)=>dispatch(setSearch(e.target.value))} className='bg-white h-10 p-5 m-5 border border-gray-300 border-2 rounded-lg w-screen-xl md:w-72 lg:w-112 outline-none'/>
    </div>
    <hr className='w-full h-[0.5px] bg-black-100 opacity-50'/>
    </>
  )
}

export default Navbar