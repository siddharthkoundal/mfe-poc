import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = React.lazy(() => import("common_components_lib/Header"));
const Footer = React.lazy(() => import("common_components_lib/Footer"));
const About = React.lazy(() => import("common_components_lib/About"));
const Contact = React.lazy(() => import("common_components_lib/Contact"));
const Education = React.lazy(() => import("common_components_lib/Education"));
const Experience = React.lazy(() => import("common_components_lib/Experience"));

import "./index.css";

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Suspense fallback={<>Loading...</>}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Siddharth Koundal's Portfolio</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </div>
  </BrowserRouter>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
