import { use } from "react";
import Product from "./Product";

const Products = ({ products, handleButton }) => {
  const productItems = use(products);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {productItems.map((product, index) => (
          <Product
            key={index}
            product={product}
            handleButton={handleButton}
          ></Product>
        ))}
      </div>
      {/* <div className="mt-10 border border-green-300 m-2">
        <CartItem></CartItem>
      </div> */}
    </>
  );
};

export default Products;
