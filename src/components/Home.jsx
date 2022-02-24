import React from "react";
import HeroImage from "./HeroImage";


function Home() {
  return (
    <div id="home">
      {/* Hero image with title,description and image url */}
      <HeroImage
        title="Hello.I'm Melih"
        description="A Developer"
        imgUrl="/images/hero-image-black.jpg"
      />
    </div>
  );
}

export default Home;
