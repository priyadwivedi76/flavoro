import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
const FoodItems = () => {
  const handleToast=(name)=>toast.success(`Added ${name} to cart`);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
    {FoodData.map((FoodItem,index)=>{
        return (
            <FoodCard key={index} foodItem={FoodItem} handleToast={handleToast}/>  //passing foodItem as props to FoodCard component
        )
    })}
    </div>
    </>
  )
}

export default FoodItems