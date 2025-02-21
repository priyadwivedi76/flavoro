import React from 'react'
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  return (
    <>
    <div className='fixed right-0 top-0 w-full lg:w-[35vh] h-full bg-white'>
      <div className='m-2 flex justify-between items-center'>
        <span className='text-xl font-semibold'>My Orders</span>
        <RxCross1 className='text-lg font-semibold border border-2 hover:scale-110 rounded-sm border-gray-300 cursor-pointer'/>
      </div>
      <div className='absolute bottom-0'>
        <h3 className='text-gray-600 font-semibold px-2 py-1'>Items:</h3>
        <h3 className='text-gray-600 font-semibold px-2 py-1'>Total Amount:</h3>
        <hr className='w-[90vw] lg:w-[18vw]'/>
        <button className='px-2 py-1 bg-green-500 rounded-lg hover:bg-green-600 text-white mb-5 w-[90vw] lg:w-[17vw]'>CheckOut</button>
      </div>
    </div>
    </>
  )
}

export default Cart