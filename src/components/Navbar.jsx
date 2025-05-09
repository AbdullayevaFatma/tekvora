import { ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="py-4 shadow-md">
        <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
          <div>
            <Link to="/">
              <h2 className="font-bold text-orange-500/75 text-xl tracking-widest ">
                TEKVORA
              </h2>
            </Link>
          </div>
          <div className="sm:flex gap-4 hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col absolute right-0  top-12 z-10 bg-zinc-50 p-4 gap-4"
                : "hidden"
            }`}
          >
            <li>
              <Link to="/">Sign</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </div>
          <div className="flex items-center gap-4">
            <User
              onClick={() => setIsOpen(!isOpen)}
              size="40"
              className="bg-gray-200 text-orange-500/75 stroke-[2.5] p-2 rounded cursor-pointer"
            />
            <Link to="/cart">
              <ShoppingCart
                size="40"
                className="relative stroke-[2.5] bg-gray-200 p-2 rounded cursor-pointer  text-orange-500/75"
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-1 flex bg-gray-200 h-5 w-5 text-gray-900 font-semibold text-xs rounded-full items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
