import React,{useEffect, useState} from 'react'
import FoodData from '../data/FoodData';
import { useDispatch,useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
const CategoryMenu = () => {
  const [categories,setCategories]=useState([]);
  const listUniqueCategories=()=>{
    const uniqueCategories=[... new Set(FoodData.map((food)=>food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }

  useEffect(()=>{
    listUniqueCategories();
  },[])

  const dispatch=useDispatch();

  const SelectedCategory=useSelector((state)=>state.category.category)

  return (
    <>
    <div className='mx-5 pt-2'>
        <h3 className="font-semibold text-[1.3em]">Find the best Food</h3>
        <div className='flex gap-5 p-2 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(setCategory('All'))}  className={`px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50 ${SelectedCategory === 'All' && "bg-green-500 text-white"}`}>All</button>
          {
            categories.map((category,index)=>{
              return(
                <button onClick={()=>dispatch(setCategory(category))} key={index} className={`px-3 mt-2 py-2 font-semibold rounded-[5px] bg-gray-200 hover:bg-green-500 hover:text-gray-50 ${SelectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
              )
            })
          }
        </div>
    </div>
    </>
  )
}

export default CategoryMenu