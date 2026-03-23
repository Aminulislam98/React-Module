import React, { useState } from "react";

const FreeCodeCampCounter = () => {
  const [count, setCount] = useState(0);
  function incrementBy1() {
    setCount(count + 1);
  }
  function decrementBy1() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="border-2 p-4 rounded border-sky-600 m-10 space-x-3">
      <h1 className="text-black text-2xl font-black">Count:{count}</h1>
      <button className=" btn btn-primary" onClick={incrementBy1}>
        Increment
      </button>
      <button className=" btn btn-accent" onClick={decrementBy1}>
        Decrement
      </button>
      <button
        onClick={reset}
        className=" btn btn-active text-red-600 font-black"
      >
        Reset
      </button>
    </div>
  );
};

export default FreeCodeCampCounter;
