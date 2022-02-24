import React from "react";

function Project(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <h1 className="text-light display-5 mb-2 pt-2">{props.title}</h1>
      <h3 className="text-secondary display-6 mb-2 pb-1">{props.description}</h3>
    </a>
  );
}

export default Project;
