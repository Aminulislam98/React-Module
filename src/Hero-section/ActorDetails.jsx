import React from "react";
import Actor from "./Actor";

const ActorDetails = () => {
  const actorName = ["Shkib Khan", "Elias Khan", "Bappas Khan", "Siam Khan"];
  return (
    <div>
      {actorName.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}
    </div>
  );
};

export default ActorDetails;
