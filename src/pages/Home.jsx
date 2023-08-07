import { useState, useEffect } from "react";
import Loader from "../components/Loader";
// import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductApi() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("error aa gya hai");
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductApi();
  }, []);
  return(
    <div className="min-h-[calc(100vh-50px)] mt-[50px] flex justify-center items-center ">
      {
    loading?<Loader/>:
    posts.length>0?
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5  my-6 min-h-[80vh] ">
    {
      posts.map((post)=>(
        <Product key={post.id} post={post}/>
      ))
      }
    </div>
    :
    <div className="flex justify-center items-center text-2xl">No data found</div>
}
    </div>
  )
};

export default Home;
