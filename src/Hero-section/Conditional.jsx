import React from "react";

const Conditional = ({ isDone, task, time }) => {
  return (
    isDone || (
      <div>
        {task && <p>Not complete yet, The topic is : {task}</p>}
        {time && <p>You have to spend: {time}</p>}
      </div>
    )
  );
};

export default Conditional;
