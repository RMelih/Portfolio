import React from "react";
import "./App.css";

function HeroImage(props) {
  //css styles
  const divStyle = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + props.imgUrl + ")",
  };

  return (
    <div
      style={divStyle}
      className="d-flex justify-content-center align-items-center min-vh-100 hero-image"
    >
      <div className="text-white border border-white p-5 rounded">
        <h1 className="display-1 ">{props.title}</h1>
        <h1 className="display-1 text-secondary">{props.description}</h1>
      </div>
    </div>
  );
}

export default HeroImage;
