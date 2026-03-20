import React from "react";
import "../App.css";

const Todo = ({ task, isDone, time }) => {
  if (isDone) {
    return (
      <div className=" border-2 max-w-90 p-4 ml-3 mb-2 rounded-2xl">
        <p>Task Done: {task}</p>
        {time && <p>Total Duration: {time}</p>}
      </div>
    );
  }
  return (
    <div className="text-red-600 border-2 max-w-90 p-4 ml-3 mb-2 rounded-2xl">
      <p>Task need to be Done: {task}</p>
      <p>Total Time to finish: {time}</p>
    </div>
  );
};

export default Todo;
