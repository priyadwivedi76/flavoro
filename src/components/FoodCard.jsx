import React from 'react'
import { FaStar } from "react-icons/fa6";
const FoodCard = ({foodItem}) => {
    const { name,desc,img,rating,price} = foodItem;
  return (
    <>
    <div className='mx-6 h-[36vh] text-sm drop-shadow-2xl m-5 w-[30vh] bg-white flex flex-col font-semibold rounded-lg shadow'>
        <div className='object-cover'>
            <img src={img} alt="" className='w-[90%] h-[17vh] transition cursor-grab duration-500 ease-out hover:scale-110'/>
        </div>
        <div className='m-2 flex justify-between'>
            <h2 className='font-semibold'>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
        </div>
        <p className='m-2 font-normal'>{desc.slice(0,50)}</p>
        <div className='flex justify-between m-1'>
            <span className='flex justify-center items-center'>
                <FaStar className='text-yellow-500'/>{rating}
            </span>
            <button className='px-2 py-1 bg-green-500 rounded-lg hover:bg-green-600 text-white'>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default FoodCard