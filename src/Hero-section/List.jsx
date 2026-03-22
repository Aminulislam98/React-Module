import React, { use } from "react";
import UserList from "./UserList";

const List = ({ userListsResponse }) => {
  const userResponse = use(userListsResponse);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {userResponse.map((user, index) => (
        <UserList key={index} user={user}></UserList>
      ))}
    </div>
  );
};

export default List;
