import React from "react";

const FuncationP = () => {
  function clickedMe() {
    console.log("Clicked me ");
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={clickedMe}>
        Click Me
      </button>
    </div>
  );
};

export default FuncationP;
