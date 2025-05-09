import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/CartSlice";


const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = useSelector((state)=>(state.product.products.find((p)=>p.id === parseInt(id))))

  if(!product){
    return <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-orange-500/75 font-semibold hover:text-orange-600/75">Return to Home</Link>
      </div>
    </div>
  }
  return (
    <section className="container mx-auto px-4 py-8">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back to Products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md rounded p-4 w-[400px]">
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6"><span className="text-3xl font-bold ">${product.price}</span></div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <span className="inline-block bg-gray-200 rounded-md px-3 py-2 text-sm">{product.category}</span></div>
            <button onClick={()=>dispatch(addToCart(product))} className="w-full md:w-auto text-white bg-orange-500/75 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600/75 "> <ShoppingCart/> Add to Cart </button>
            </div>
           
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
