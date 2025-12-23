import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import resume from "./assets/Nithisha resume.pdf";
import heroImage from "./assets/nithisha.jpg";

function App() {
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      let offset = window.pageYOffset;
      hero.style.backgroundPositionY = offset * 0.5 + "px";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">MADHANU MOKSHA NITHISHA</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "#000" },
            fpsLimit: 60,
            particles: {
              color: { value: "#00c6ff" },
              links: { enable: true, distance: 150, color: "#00c6ff", opacity: 0.4, width: 1 },
              move: { enable: true, speed: 2, direction: "none", outModes: { default: "bounce" } },
              number: { value: 50 },
              size: { value: { min: 1, max: 4 } }
            },
            detectRetina: true
          }}
        />
        <div className="overlay"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h4>HELLO, I'M</h4>
            <h1>Madhanu Moksha <br /> Nithisha</h1>
            <a href={resume} download className="btn">
              Download Resume
            </a>
          </div>

          <div className="hero-image floating">
            <img src={heroImage} alt="Nithisha" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me & Education</h2>
        <p>
          Final-year Information Technology student at Vignan University, Guntur. Passionate about frontend
          development, React, and building clean user-friendly applications.
        </p>
        <h3>Education</h3>
        <ul>
          <li>B.Tech in Information Technology, Vignan University, Guntur (2022–2026, GPA: 7.1/10)</li>
          <li>Intermediate (MPC), Kakathiya Jr. College (2020–2022, GPA: 7.0/10)</li>
          <li>SSC, Auxilium High School (2019–2020, GPA: 9.7/10)</li>
        </ul>
        <h3>Technical Skills</h3>
        <p>
          Languages: JavaScript, Python, C <br />
          Web: React.js, Node.js, HTML, CSS <br />
          Databases: MongoDB, MySQL <br />
          Tools: Git, GitHub, Jenkins, Postman, VS Code <br />
          Soft Skills: Communication, Problem-solving, Teamwork
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>Postman</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Real Estate Web App</h3>
            <p>React, Node.js, MongoDB — Developed a responsive property listing site. Managed 500+ properties and improved search UX by 40%.</p>
          </div>
          <div className="project-card">
            <h3>Zomato Clone with CI/CD</h3>
            <p>HTML, CSS, JS, Jenkins — Built frontend and automated deployments. Achieved 60% faster build and deployment cycles.</p>
          </div>
          <div className="project-card">
            <h3>Online Exam Portal</h3>
            <p>HTML, CSS, PHP, MySQL — Supported student/faculty roles, question uploads, and real-time results for 1,000+ users.</p>
          </div>
          <div className="project-card">
            <h3>Brain Tumor Detection (ML)</h3>
            <p>Python, TensorFlow, Keras — CNN model achieved 94% accuracy, Precision 92%, Recall 90%, F1 91%.</p>
          </div>
          <div className="project-card">
            <h3>Travel Agency Booking System</h3>
            <p>HTML, CSS, JS, PHP — Flight booking app with dynamic services and responsive UX design.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>📞 6304102953</p>
        <p>📧 mokshanithisham@gmail.com</p>
        <p>🔗 linkedin.com/in/moksha-nithisha-madhanu</p>
      </section>

      <footer className="footer">
        © 2025 MADHANU MOKSHA NITHISHA
      </footer>
    </>
  );
}

export default App;
