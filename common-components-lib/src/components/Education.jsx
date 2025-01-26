import React from "react";
import "../styles/content.css";

function Education() {
  return (
    <div className="content-section">
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.E Computer Science + M.Sc. Mathematics</h3>
        <p className="college-name">BITS Pilani, Goa Campus</p>
        <p className="year">2020 - 2025</p>
        <p className="description">
          <strong>Key Courses Taken:</strong>
          <ul className="course-list">
            <li>
              <strong>CS Core:</strong> Data Structure and Algorithms, Design
              and Analysis of Algorithms, Object-Oriented Programming, Database
              System, Operating System, Computer Networks
            </li>
            <li>
              <strong>Mathematics:</strong> Probability and Statistics,
              Statistical Inference and Applications, Applied Statistical
              Methods, Optimization, Linear Algebra, Discrete Mathematics,
              Graphs and Networks, Numerical Analysis
            </li>
          </ul>
        </p>
      </div>
      <div className="education-item">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Material-UI</li>
              <li>shadcn</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Spring Boot</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Other Skills</h4>
            <ul>
              <li>Frontend Development</li>
              <li>API Integration & Development</li>
              <li>Backend Development</li>
              <li>State Management (Redux)</li>
              <li>Git</li>
              <li>VS Code</li>
              <li>IntelliJ</li>
              <li>OOP</li>
              <li>DBMS</li>
              <li>Data Structures and Algorithms</li>
              <li>MongoDB</li>
              <li>Microservices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
