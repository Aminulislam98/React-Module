import React from "react";

const UserList = (user) => {
  const person = user.user;
  return (
    <div className="border-2 border-yellow-600 m-4 px-1 py-10 flex flex-col justify-center items-center rounded-2xl">
      <p
        className="p-4 bg-purple-600 rounded-full w-15 h-15 flex justify-center items-center text-2xl font-black mb-3 cursor-pointer"
        title="Change Profile"
      >
        {person.name[0]}
      </p>
      <p className="text-2xl font-semibold">{person.name}</p>
      <h2 className="text-gray-400">{person.username}</h2>
      <p>Phone: {person.phone}</p>
      <p>
        Website:{" "}
        <a className="underline" href={person.website}>
          {person.website}
        </a>
      </p>
    </div>
  );
};

export default UserList;
