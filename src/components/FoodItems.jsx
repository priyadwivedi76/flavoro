import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
const FoodItems = () => {
  return (
    <>
    {FoodData.map((FoodItem,index)=>{
        return (
            <FoodCard key={index} foodItem={FoodItem}/>  //passing foodItem as props to FoodCard component
        )
    })
    }
    </>
  )
}

export default FoodItems