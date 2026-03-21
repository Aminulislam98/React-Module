import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="border-2 p-4 rounded flex flex-col justify-center items-center space-y-2">
      <h1 className="text-2xl font-bold text-green-600">Count: {count}</h1>
      <button onClick={() => increaseCount()} className="btn btn-primary">
        Click
      </button>
    </div>
  );
};

export default State;
