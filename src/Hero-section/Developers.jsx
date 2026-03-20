import React from "react";
import Developer from "./Developer";

const Developers = () => {
  const developers = [
    {
      id: "1",
      name: "Aminul Islam",
      Profession: "Web developer",
      Location: "United Kingdom",
    },
    {
      id: "2",
      name: "Khadijah Bint Aminul",
      Profession: "Web developer",
      Location: "United Kingdom",
    },
  ];
  return (
    <div>
      {developers.map((developer) => (
        <Developer developer={developer} key={developer.id} />
      ))}
    </div>
  );
};

export default Developers;
