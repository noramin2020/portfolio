import './App.css';
import profileImg from './assets/pp.jpg';
import Guess from './assets/guesswifi.png';
import LPP from './assets/lppchat.png';
import BRGY from './assets/brgysystem.png';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="navbar">
          <div className="logo">Nor-Amin Portfolio</div>
          <nav>
            <ul>
            <li><a href="#">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Porfolio</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </nav>
        </div>
        <div className="intro-section">
          <h3>Hello & Welcome</h3>
          <h1>I am A Software Developer | UI/UX Designer</h1>
          <div className="socials">
            <FaLinkedin />
            <FaInstagram />
            <FaGithub />
            <FaFacebook />
          </div>
          <button className="cv-btn">Download CV</button>
        </div>
      </header>

      <section className="about" id="about">
        <div className="about-content">
          <div>
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
          <div className="about-text">
          <h2>Hi,</h2>

            <h2>
              I'm <span className="highlight">Nor-Amin Hadji Ali</span>,
            </h2>
            <p>
            I am a Bachelor of Science in Information Technology (BSIT) graduate from Mindanao State University – Main Campus in Marawi City. During my college years, I served as the Cartoon Editor for The Cursor Publication, combining creativity with leadership.
            </p>
            <p>
            My professional focus is in Software Development, with experience as a WordPress Developer and UI/UX Developer. In addition to development, I also have hands-on experience in IT support, including network support, troubleshooting, and MikroTik configuration. I bring a well-rounded skill set that merges technical expertise with creative problem-solving and design thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-card">
        <div class="project-text">
    <h3>GUESS WI-FI</h3>
    <h4>Developed a web-based system for secured Wi-Fi access in CICS by configuring a MikroTik router and integrating API-based user authentication. Implemented user access control and blacklist management to enhance network security and ensure efficient user management.</h4>
  </div>
          <img src={Guess} alt="GUESS WIFI" />
          
        </div>

        <div className="project-card">
        <div class="project-text">
    <h3>GUESS WI-FI</h3>
    <h4>Developed a web-based system for secured Wi-Fi access in CICS by configuring a MikroTik router and integrating API-based user authentication. Implemented user access control and blacklist management to enhance network security and ensure efficient user management.</h4>
  </div>
          <img src={LPP} alt="LPP GC Chat" />
          
        </div>
        <div className="project-card">
        <div class="project-text">
    <h3>GUESS WI-FI</h3>
    <h4>Developed a web-based system for secured Wi-Fi access in CICS by configuring a MikroTik router and integrating API-based user authentication. Implemented user access control and blacklist management to enhance network security and ensure efficient user management.</h4>
  </div>
          <img src={BRGY} alt="BRGY System" />
          
        </div>
      </section>

      <section className="experience" id="experience">
        <h2>Experience and Education</h2>
        <div className="exp-cards">
          <div className="exp-card">
            <h4>The Launchpadteam Inc.</h4>
            <p>Roles: IT Intern</p>
            <p>Software Developer<br />Wordpress Developer<br />UI/UX Developer<br />IT-Support</p>
          </div>
          <div className="exp-card">
            <h4>The Cursor Publication</h4>
            <p>Roles: Member</p>
            <p>Former Cartoon Editor<br />Cartoonist</p>
          </div>
          <div className="exp-card">
            <h4>Mindanao State University Main Campus</h4>
            <p>Bachelor of Science in Information Technology</p>
          </div>
        </div>
      </section>

      <section className="skills" id="certificates">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">Vite</div>
          <div className="skill">React</div>
          <div className="skill">PHP</div>
          <div className="skill">MySQL</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">MikroTik</div>
          <div className="skill">Canva</div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <p>Email: <a href="mailto:nor.amin.jcb@owasii.com">nor.amin.jcb@owasii.com</a></p>
        <p>Cagayan de Oro, Misamis Oriental, Philippines</p>
        <div className="socials">
          <FaLinkedin />
          <FaInstagram />
          <FaGithub />
          <FaFacebook />
        </div>
      </footer>
    </div>
  );
}

export default App;