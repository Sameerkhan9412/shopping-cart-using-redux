import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  console.log(cart);
  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return <div className="overflow-hidden">
    {
      cart.length>0?
      (<div className="w-[90%] flex m-auto h-[calc(100vh-50px)] mt-[50px]">
        <div className="w-[60%] h-[calc(100vh-50px)] overflow-y-scroll overflow-x-hidden  ">
          {
            cart.map((item, index)=>(
              <CartItems key={item.id} item={item} itemIndex={index}/>
            ))
          }
        </div>
        <div className="flex flex-col justify-between  w-[40%] ml-10">
          <div className="text-green-600 font-bold">
            <div className="text-[20px]">Your Cart</div>
            <div className="text-3xl">Summary</div>
            <p className="text-[20px] text-black mt-3">
              <span>Total Items : {cart.length}</span>
            </p>
           
          </div>
          <div>
            <p className="text-black font-bold ">Total Amount: Rs.{totalAmount}</p>
            <button className="text-2xl bg-green-600 text-white px-2 py-1 rounded-lg font-bold mb-2" >checkout now</button>
          </div>
        </div>
      </div>):
       (<div className="flex justify-center flex-col items-center ">
        <h1 className="text-center text-3xl">Cart is empty</h1>
        <NavLink to="/">
          <button className="text-2xl bg-red-400 p-2 rounded-2xl mt-3 text-white font-bold transition ease-in-out duration-300 hover:text-black hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">shop now</button>
        </NavLink>
      </div>)
    }
  </div>;
};

export default Cart;
