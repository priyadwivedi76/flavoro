import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
const FoodItems = () => {
  return (
    <>
    <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
    {FoodData.map((FoodItem,index)=>{
        return (
            <FoodCard key={index} foodItem={FoodItem}/>  //passing foodItem as props to FoodCard component
        )
    })}
    </div>
    </>
  )
}

export default FoodItems