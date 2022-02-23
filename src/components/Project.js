import React from "react";

function Project(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <h1 className="text-light display-4">{props.title}</h1>
      <h3 className="text-secondary display-5">{props.description}</h3>
    </a>
  );
}

export default Project;
