import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-t-md p-4"
        />
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-4">
            {product.title.length > 20
              ? product.title.substring(0, 20) + "..."
              : product.title}
          </h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description.substring(0, 55) + " ..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">{product.price}$</p>
            <p className="text-orange-500/75 font-semibold">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
