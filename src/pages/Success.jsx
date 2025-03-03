import React,{useEffect, useState} from 'react'
import { PropagateLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate();
  const [loading,SetLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      SetLoading(false);
    },3000);
  },[])
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
    {loading ? (<PropagateLoader color="#51C7B0" />): 
    (<div>
      <h1 className='text-3xl font-semibold mb-3'>Thank you for your order!</h1>
      <p>Your order has been successfully placed. You will receive an email confirmation shortly.</p>
      <button onClick={()=>navigate(-1)} className='px-2 py-3 rounded-lg bg-green-600 text-white font-semibold'>Go back</button>
    </div>)
    }
    </div>
    </>
  )
}

export default Success