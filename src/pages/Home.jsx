import React from "react";

import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
