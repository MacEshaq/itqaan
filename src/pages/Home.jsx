import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
