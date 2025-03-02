import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeToCart } from '../redux/slices/CartSlice';
const ItemCart = ({name,price,img,quantity,id}) => {
  const dispatch=useDispatch();
  return (
    <>
      <div className='flex gap-2 shadow-md rounded-lg p-2'>
        <MdDelete onClick={()=>dispatch(removeToCart({id,name,price,img,quantity}))} className='text-gray-500 hover:text-red-500 hover:cursor-pointer text-2xl absolute right-7'/>
        <img src={img} className='h-[8vh] w-[8vh]'/>
          <div>
            <h2 className='font-bold text-gray-600 mb-1 text-[0.9em]'>{name}</h2>
            <div className='flex justify-between'>
              <h2 className='text-green-500 font-semibold'>₹{price}</h2>
              <div className='flex items-center justify-center right-7 absolute gap-2'>
                <FaMinus className='border border-gray-500 border-2 hover:text-green-500 hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer text-xl'/>
                <span>{quantity}</span>
                <FaPlus className='border border-gray-500 border-2 hover:text-green-500 hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer text-xl'/>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default ItemCart