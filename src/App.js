import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Projects from "./components/Projects/Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <Service /> */}
      <Project />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
