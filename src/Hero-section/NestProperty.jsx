import React from "react";

const NestProperty = ({ name, age, country, profession }) => {
  return (
    <div className="border-2 p-4 border-green-600 mt-3 space-y-2">
      <p className="rounded-full bg-green-600 w-12 h-12 flex justify-center items-center">
        {name[0].toUpperCase()}
      </p>
      <h1 className="text-[18px] font-bold">{name}</h1>
      <div className="flex space-x-2 ">
        <p className="py-0.5 px-2 bg-green-500 text-[12px] font-semibold rounded-2xl flex justify-center items-center ">
          Age: {age}
        </p>
        <p className="py-0.5 px-2 bg-yellow-600 text-[12px] font-semibold rounded-2xl flex justify-center items-center ">
          Location: {country}
        </p>
        <p className="py-0.5 px-2 bg-blue-600 text-[12px] font-semibold rounded-2xl flex justify-center items-center ">
          Profession: {profession}
        </p>
      </div>
    </div>
  );
};

export default NestProperty;
