import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ItemCart = () => {
  return (
    <>
      <div className='flex gap-2 shadow-md rounded-lg p-2'>
        <MdDelete className='text-gray-500 hover:text-red-500 hover:cursor-pointer text-2xl absolute right-7'/>
        <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb" className='h-[8vh] w-[8vh]'/>
          <div>
            <h2 className='font-bold text-gray-600 mb-1'>Onion Pizza</h2>
            <div className='flex justify-between'>
              <h2 className='text-green-500 font-semibold'>₹120</h2>
              <div className='flex items-center justify-center right-7 absolute gap-2'>
                <FaMinus className='border border-gray-500 border-2 hover:text-green-500 hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer text-xl'/>
                <span>1</span>
                <FaPlus className='border border-gray-500 border-2 hover:text-green-500 hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer text-xl'/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default ItemCart