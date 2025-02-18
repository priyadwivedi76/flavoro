import React from 'react'

const CategoryMenu = () => {
  return (
    <>
    <div className='mx-5 pt-2'>
        <h3 className="font-semibold text-[1.3em]">Find the best Food</h3>
        <div className='flex gap-5 p-2 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className='px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50'>All</button>
            <button className='px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50'>Breakfast</button>
            <button className='px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50'>Lunch</button>
            <button className='px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50'>Dinner</button>
        </div>
    </div>
    </>
  )
}

export default CategoryMenu