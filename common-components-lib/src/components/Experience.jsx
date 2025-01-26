import React from "react";
import "../styles/content.css";

function Experience() {
  return (
    <div className="content-section">
      <h2>Experience</h2>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Development Intern</h3>
          <div className="company-details">
            <span className="company-name">1Click Tech</span>
            <span className="location">Gurugram, HR</span>
            <span className="duration">Jul 2024 – Dec 2024</span>
          </div>
        </div>
        <ul className="experience-points">
          <li>
            Led development of a live HRMS and LMS site, designing and managing
            the frontend with Next.js, React.js, Redux, TypeScript, and
            TailwindCSS. Focused on responsive UI, component modularity, and
            maintainable code structures to deliver a clean, seamless UX.
          </li>
          <li>
            Optimized state management by using Redux for centralized API
            response caching, reducing redundant calls by 50%.
          </li>
          <li>
            Reduced initial page load times by 35% through lazy loading, code
            splitting, and memoization techniques, and integrated WebSocket for
            real-time interactivity, enabling instant notifications and live
            data synchronization for seamless engagement.
          </li>
          <li>
            Improved data retrieval speed by 40% with debounced search
            functionality, minimizing server load and enhancing performance.
          </li>
          <li>
            Led backend development of a microservices-based payroll system
            using Java Spring Boot and MySQL, implementing efficient CRUD
            operations with JPA and Hibernate for optimal data management and
            consistency.
          </li>
          <li>
            Secured backend endpoints with Spring Security and facilitated
            seamless frontend-backend integration through well-documented REST
            APIs using Swagger UI, ensuring secure, efficient, and stable data
            flow across HRMS modules.
          </li>
          <li>
            Strengthened application security by implementing Role-Based Access
            Control (RBAC) and OAuth2.0 authentication, ensuring secure access
            layers and protecting sensitive user data.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3>Software Development Intern</h3>
          <div className="company-details">
            <span className="company-name">Swecha</span>
            <span className="location">Hyderabad, TG</span>
            <span className="duration">June 2022 – July 2022</span>
          </div>
        </div>
        <ul className="experience-points">
          <li>
            Collaborated with the web development team to design and build a
            text-to-speech web application with a fully responsive interface
            using HTML, CSS, and JavaScript, ensuring consistent performance
            across devices.
          </li>
          <li>
            Integrated a text-to-speech API, enabling seamless functionality
            with real-time language processing and dynamic playback controls.
          </li>
          <li>
            Enhanced user experience and engagement by implementing
            multi-language support, ensuring the application's adaptability and
            inclusivity for a diverse user base.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
