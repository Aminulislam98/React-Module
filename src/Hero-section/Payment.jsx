import React from "react";

const Payment = ({ cart }) => {
  const totalQuantity = cart.reduce((sum, num) => {
    return sum + num.quantity;
  }, 0);
  const totalPrice = cart.reduce((sum, num) => {
    return sum + num.price * num.quantity;
  }, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-yellow-800 font-black mb-5">
        Payment Info.
      </h2>
      <p className="text-sm text-yellow-800 font-semibold">
        Total Items : {totalQuantity}
      </p>
      <p className="text-sm text-yellow-800 font-semibold">
        Subtotal : {totalPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default Payment;
