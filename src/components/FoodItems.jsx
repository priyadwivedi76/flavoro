import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {
  const handleToast=(name)=>toast.success(`Added ${name} to cart`);
  const category=useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.search.search)
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
      {FoodData.filter((food)=>{
        if(category === 'All'){
          return food.name.toLowerCase().includes(search.toLowerCase());
        }else{
          return(
          category === food.category && 
          food.name.toLowerCase().includes(search.toLowerCase())
          )
        }
      }).map((foodItem)=>{
        return (
            <FoodCard key={foodItem.id} foodItem={foodItem} handleToast={handleToast}/>  //passing foodItem as props to FoodCard component
        )
      })}
    </div>
    </>
  )
}

export default FoodItems