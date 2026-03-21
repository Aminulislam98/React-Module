import React from "react";

const FunctionParam = () => {
  function param(num) {
    console.log(num + num);
  }
  return (
    <div>
      <button
        className="btn btn-accent"
        onClick={() => {
          param(7);
        }}
      >
        Clicked me
      </button>
    </div>
  );
};

export default FunctionParam;
