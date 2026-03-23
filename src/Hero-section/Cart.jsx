import CartItems from "./CartItems";
import Payment from "./Payment";

const Cart = ({ cart, handleDelete }) => {
  return (
    <>
      <p className="text-xl font-semibold text-[#0f172a] mt-4 mb-4 flex justify-center items-center bg-green-50 p-3">
        Cart Items
      </p>
      <div className="grid grid-cols-2">
        <div className="">
          {cart.map((cartItem, index) => (
            <CartItems
              key={index}
              cartItem={cartItem}
              handleDelete={handleDelete}
            ></CartItems>
          ))}
        </div>
        <div className="bg-yellow-50 border-yellow-300 ">
          <Payment cart={cart}></Payment>
        </div>
      </div>
    </>
  );
};

export default Cart;
