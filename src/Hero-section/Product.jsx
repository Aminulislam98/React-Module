import React from "react";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden ">
      <div className="topSection flex justify-center items-center bg-gray-100 py-4 ">
        <img className="w-50 h-50 object-contain" src={product.image} alt="" />
      </div>
      <div className="bottomSection p-3 space-y-0.5">
        <p className="text-gray-700 text-sm">
          {product.category.toUpperCase()}
        </p>
        <h2 className="text-[18px] font-semibold text-black line-clamp-1">
          {product.title}
        </h2>
        <p className="text-[18px] font-bold text-black">£{product.price}</p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3">
          <button onClick={product.id} className="btn btn-primary">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
