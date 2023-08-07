import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  // const {cart}=useSelector((state)=state.cart);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item is remove from the cart");
  };
  const addToCart = () => {
    dispatch(add(post));
    toast.success("item added to cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition ease-in-out duration-300 gap-3 px-2 py-3  ml-5 mb-2 mx-4 outline rounded-lg hover:shadow-[1px_1px_10px_2px_#1a202c]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-48 mt-1 ">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-full text-gray-400 font-normal text-[10px] text-center">
          {" "}
          {post.description.split(" ").slice(0, 10).join(" ") + "...  "}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <p className="text-green-600 font-semibold items-center"> Rs. {post.price}</p>
        </div>
        {cart.some((p) => p.id == post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase transition ease-in-out duration-300 hover:bg-gray-700 hover:text-white">Remove post</button>
        ) : (
          <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase transition ease-in-out duration-300 hover:bg-gray-700 hover:text-white  " >Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
