import React from "react";
import HeroImage from "./HeroImage";

function Home() {
  return (
    <div id="home">
      <HeroImage
        title="Hello.I'm Melih"
        description="A Developer"
        imgUrl="./images/hero-image-black.jpg"
      />
    </div>
  );
}

export default Home;
