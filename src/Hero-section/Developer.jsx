import React from "react";

const Developer = ({ developer }) => {
  //   const [name, Profession, Location] = developer;
  return (
    <div className="border-2 rounded p-5 mb-4">
      <h1>Name: {developer.name}</h1>
      <p>Profession: {developer.Profession}</p>
      <p>Location: {developer.Location}</p>
    </div>
  );
};

export default Developer;
