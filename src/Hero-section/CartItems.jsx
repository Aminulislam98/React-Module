const CartItems = ({ cartItem, handleDelete }) => {
  return (
    <div className="bg-white border border-gray-300  overflow-hidden flex justify-between flex-row px-3">
      <div className="flex flex-row">
        <div className="topSection flex justify-start items-center  py-4 ">
          <img
            className="w-20 h-20 object-contain"
            src={cartItem.image}
            alt=""
          />
        </div>
        <div className="bottomSection p-3 space-y-0.5 max-w-120">
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-1">
            {cartItem.title}
          </h2>
          <p className="text-xs font-bold text-gray-400">
            £{cartItem.price}-Each
          </p>
          <p className="text-xs text-green-600 font-semibold">
            Quantity: {cartItem.quantity}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            handleDelete(cartItem);
          }}
          className="bg-red-100 text-red-500 rounded py-1 px-3 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
