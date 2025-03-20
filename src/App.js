import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import About from "./Pages/About";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
