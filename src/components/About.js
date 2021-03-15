import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> frehan nehan</p>
      <img src={image} alt="Jahaira made this!"/>;
    </div>
  );
}

export default About;
