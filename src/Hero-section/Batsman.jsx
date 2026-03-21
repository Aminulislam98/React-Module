import React, { useState } from "react";

const Batsman = () => {
  const [score, setScore] = useState(0);
  const ball1 = () => {
    setScore(score + 1);
  };
  const ball4 = () => {
    setScore(score + 4);
  };
  const ball6 = () => {
    setScore(score + 6);
  };
  return (
    <div className="border-4 p-4">
      <h1>Total Score: {score}</h1>
      {score >= 50 && <p className="text-yellow-600">Congrats You hit 50</p>}
      {score >= 100 && <p className="text-green-600">Congrats You hit 100</p>}
      <button className="btn btn-primary mr-2" onClick={ball1}>
        1
      </button>
      <button className="btn btn-primary mr-2" onClick={ball4}>
        4
      </button>
      <button className="btn btn-primary" onClick={ball6}>
        6
      </button>
    </div>
  );
};

export default Batsman;
