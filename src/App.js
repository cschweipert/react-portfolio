import React from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Landing />
      {/* <Header /> */}
      <Projects />
      <Skills />
      <About />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
