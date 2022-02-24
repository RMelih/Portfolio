import React from "react";

function Link(props) {
  return (
    <a href={props.link} target="_blank">
      <h3 className="text-secondary ">{props.name}</h3>
    </a>
  );
}

export default Link;
