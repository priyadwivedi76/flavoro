import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
const Home = () => {
  return (
    <div className='container mx-auto'>
       <Navbar/> 
       <CategoryMenu/>
       <FoodItems/>
    </div>
  )
}

export default Home