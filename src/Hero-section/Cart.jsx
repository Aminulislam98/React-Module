import React from "react";
import CartItems from "./CartItems";

const Cart = ({ cart }) => {
  return (
    <>
      <p className="text-2xl font-black text-black mt-4 mb-4 flex justify-center items-center bg-green-50 p-3">
        Cart Items
      </p>
      <div className="grid grid-cols-1  xl:grid-cols-2 gap-3">
        {cart.map((cartItem, index) => (
          <CartItems key={index} cartItem={cartItem}></CartItems>
        ))}
      </div>
    </>
  );
};

export default Cart;
