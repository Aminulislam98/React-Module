import React from "react";
import { use } from "react";
import Product from "./Product";

const Products = ({ products }) => {
  const productItems = use(products);
  console.log(productItems.length);
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {productItems.map((product, index) => (
        <Product key={index} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
