import { Minus, Plus, Trash } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const total = cartItems.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2>Cart is empty</h2>
          <p className="text-gray-600 my-4">Add Some Products To Your Cart</p>
          <Link
            to="/"
            className="inline-block bg-orange-500/75 px-6 py-2 text-white rounded-lg hover:bg-orange-600/75"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>
              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-blue-600"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        dispatch(removeFromCart(item.id));
                      } else {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          }),
                        );
                      }
                    }}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                  <div
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4  text-orange-500/75 hover:text-orange-600/75 cursor-pointer"
                  >
                    <Trash size={20} className="stroke-[2.5]"/>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="shadow-md p-6 rounded-md bg-white">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t-2 pt-2 font-bold flex justify-between items-center">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-orange-500/75 py-2 px-6 rounded-lg hover:bg-orange-600/75 text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
