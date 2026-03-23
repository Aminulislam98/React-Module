const CartItems = ({ cartItem }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden grid grid-cols-2">
      <div className="topSection flex justify-center items-center bg-gray-100 py-4 ">
        <img className="w-40 h-40 object-contain" src={cartItem.image} alt="" />
      </div>
      <div className="bottomSection p-3 space-y-0.5">
        <p className="text-gray-700 text-sm">
          {cartItem.category.toUpperCase()}
        </p>
        <h2 className="text-[18px] font-semibold text-black line-clamp-1">
          {cartItem.title}
        </h2>
        <p className="text-[18px] font-bold text-black">£{cartItem.price}</p>
        <p className="text-1xl text-green-600 font-semibold">
          Quantity: {cartItem.quantity}
        </p>
        <button className="btn btn-secondary mt-3">Delete</button>
      </div>
    </div>
  );
};

export default CartItems;
