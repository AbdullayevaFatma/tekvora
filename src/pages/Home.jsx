import React from "react";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setSelectedCategory,
} from "../features/products/ProductSlice";
import headphone from "../assets/headphone.jpg";

const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Headphones",
  "Smartwatches",
  "Accessories",
];

const Home = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.product);
  return (
    <>
      <div className="background brightness-75 contrast-125"></div>

      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center md:justify-evenly">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center my-12">
          <form>
            <input
              type="text"
              placeholder="Search for product"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="max-w-2xl w-3/5 py-2 px-6 rounded-lg text-lg text-orange-500/75 
               placeholder:text-orange-300 bg-white border border-orange-300 
               focus:outline-none focus:ring-2 focus:ring-orange-400/50 
               focus:border-orange-500 shadow-sm transition-all duration-200"
            />
          </form>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
};

export default Home;
