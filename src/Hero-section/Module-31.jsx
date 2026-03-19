import React from "react";
import "../App.css";

const ModulePractice = ({ brand, name, price = "Contact us for Price" }) => {
  return (
    <div className="device">
      <p>Brand: {brand}</p>
      <p>Model: {name}</p>
      <p>Price: {price}</p>
      <button className="buyNow">Buy Now</button>
    </div>
  );
};

export default ModulePractice;
