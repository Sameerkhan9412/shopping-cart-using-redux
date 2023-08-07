import React from 'react'
import { toast } from 'react-hot-toast';
import {AiTwotoneDelete} from "react-icons/ai"; 
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
const CartItems = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className='flex  m-3 pb-4  w-full relative '>
      <div className='flex justify-center  gap-2 '>
        <div className='w-[200px]'>
          <img src={item.image} alt="" className='object-fit ' />
        </div>
        <div className='flex flex-col justify-evenly'>
          <h1 className='text-2xl font-bold'>{item.title}</h1>
          <h1>{item.description.split(" ").splice(0,10).join(" ")+"..."}</h1>
          <div>
            <p className='text-green-600 font-bold '>Rs.{item.price}</p>
          </div>
          <div onClick={removeFromCart} className='text-3xl cursor-pointer border-2 w-fit rounded-lg border-red-500'><AiTwotoneDelete/></div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 rounded-full  h-2  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'></div>
    </div>
  )
}

export default CartItems