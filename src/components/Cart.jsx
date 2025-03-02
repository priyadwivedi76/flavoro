import React,{ useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {
  const [activeCart,setActiveCart]=useState(true);
  const CartItems=useSelector((state)=>state.cart.cart);
  const totalQuantity=CartItems.reduce((totalQuantity,items)=>totalQuantity+items.quantity,0)
  const totalPrice=CartItems.reduce((totalPrice,items)=>totalPrice+items.quantity*items.price,0);
  console.log(CartItems);

  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[35vh] h-full bg-white ${activeCart ? "translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
      <div className='m-2 flex justify-between items-center mb-2'>
        <span className='text-xl font-semibold'>My Orders</span>
        <RxCross1 onClick={()=>(setActiveCart(!activeCart))} className='text-lg font-semibold border border-2 hover:scale-110 rounded-sm border-gray-300 cursor-pointer'/>
      </div>
      {CartItems.length>0 ? CartItems.map((items)=>{
        return <ItemCart key={items.id} id={items.id} name={items.name} price={items.price} img={items.img} quantity={items.quantity}/>
      }): <h2 className='text-md text-center text-gray-400'>Your Cart is empty</h2>}
      <div className='absolute bottom-0'>
        <h3 className='text-gray-600 font-semibold px-2 py-1'>Items:{totalQuantity}</h3>
        <h3 className='text-gray-600 font-semibold px-2 py-1'>Total Amount:{totalPrice}</h3>
        <hr className='w-[90vw] lg:w-[18vw]'/>
        <button className='px-2 py-1 bg-green-500 rounded-lg hover:bg-green-600 text-white mb-5 w-[90vw] lg:w-[17vw]'>CheckOut</button>
      </div>
    </div>

    <FaCartArrowDown onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white p-2 text-5xl fixed bottom-10 right-4 ${totalQuantity>0 && "animate-bounce duration-delay-150 transition-all"}`}/>
    </>
  )
}

export default Cart