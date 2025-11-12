import "./App.css";
import GridLines from "react-gridlines";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUS from "./components/ContactUS";

import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <div className="App relative min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Skills />
      <Projects />
      <ContactUS />
    </div>
  );
}

export default App;
