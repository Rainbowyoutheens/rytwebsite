import React from "react";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Component/Events";
import Academy from "./Component/Academy";
import Blog from "./Component/Blog";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
