import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
