import React from "react";

const Style = ({ isImportant }) => {
  const styles = {
    color: isImportant ? "red" : "black",
    fontSize: isImportant ? "24px" : "16px",
  };
  return (
    <div>
      <h1 style={styles}>This is aminul islam</h1>
    </div>
  );
};

export default Style;
