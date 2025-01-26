import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

import "./index.css";
// import "./styles/content.css";

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<h1>Siddharth Koundal's Portfolio</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
