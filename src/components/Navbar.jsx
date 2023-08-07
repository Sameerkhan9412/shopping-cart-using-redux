import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div className="h-[50px]   fixed top-0 right-0 left-0  bg-gradient-to-r from-slate-100 via-violet-600 to-indigo-600 z-30 ">
      <div className="flex items-center justify-between h-full  font-medium text-slate-100 mr-5 space-x-6 ">
        <NavLink to="/">
          <img
            src={logo} 
            alt="" className="h-10 ml-3 border-2 border-black rounded-md"
          />
        </NavLink>
        <div className="flex items-center font-medium gap-x-2 ">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length>0&&(
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {
                  cart.length
                }
                </span>)
}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
