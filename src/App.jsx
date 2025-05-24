import './App.css';
import profileImg from './assets/pp.jpg';
import Guess from './assets/Wfi.png';
import LPP from './assets/LPP.png';
import BRGY from './assets/Brgy.png';
import lppp from './assets/lppp.png';
import Gppp from './assets/guess_logo.png';
import Bppp from './assets/logo.png';
import Cppp from './assets/Cursor.png';
import MSU from './assets/MSU.png';
import Image from './assets/profile.png';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import React, { useState, useEffect } from "react";


function App() {

   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/UpResume.pdf'; // This should match the filename in your public folder
    link.download = 'NorAmin_CV.pdf'; // Optional: customize download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    
  };
const titles = [' Software Developer', 'n UI/UX Designer'];

  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      // Typing effect: add one char
      if (charIndex < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + titles[currentTitleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      // Deleting effect: remove one char
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 100);
      } else {
        // Finished deleting, move to next title
        setTyping(true);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, titles, currentTitleIndex]);
  

  return (
    <div className="app">
      <header className="header">
       <div className="navbar">
  <div className="logo">Nor-Amin Portfolio</div>
  
  {/* Burger Icon */}
  <div className="burger" onClick={toggleMenu}>
    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  </div>

  {/* Navigation Menu */}
  <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skill">Skills</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>
  </nav>
</div>
        <div className="intro-section">
          <h3>Hello & Welcome</h3>
          <h1>I am a{displayedText}<span className="cursor">|</span></h1>
           <div className="socials">
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/jd_ali_29/profilecard/?igsh=MTNjN3c3a3J3bThlaQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/noramin2020" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/Light002911" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <button className="cv-btn" onClick={handleDownload}>Download CV</button>
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
    <h3>Barangay Management System</h3>
    <h4>Developed a web-based system for resident profiling, certificate generation, and 
QR code encryption for document authentication. Enabled A4-size PDF 
downloads of generated certificates with embedded encrypted QR codes, 
ensuring secure and efficient management of barangay records.
</h4>
  </div>
  <img className="logo" src={Bppp} alt="GUESS WIFI" />
   <img src={BRGY} alt="BRGY System" />
          
        </div>

        <div className="project-card-LPP">
          <img src={LPP} alt="LPP GC Chat" />
        <div class="Lroject-text">
    <h3>Redesign Launchpad Website</h3>
    <h4>Redesign the UI of the main websites of the Company using Figma, and Canva for Logos.
      
</h4>
<h4>
https://thelaunchpadteam.com/
</h4>
  </div>
  <a href="https://thelaunchpadteam.com/" target="_blank" rel="noopener noreferrer">
  <img className="logo" src={lppp} alt="GUESS WIFI" />
</a>

        </div>

        <div className="project-card">
        <div class="project-text">
    <h3>Wi-fi Access Control System 
for Learnings of Students
</h3>
    <h4>Developed a web-based system for secured Wi-Fi access in CICS by configuring 
a MikroTik router and integrating API-based user authentication. Implemented 
user access control and blacklist management to enhance network security and 
ensure efficient user management.</h4>
  </div>
         <img className="logo" src={Gppp} alt="GUESS WIFI" />
          <img src={Guess} alt="GUESS WIFI" />
          
        </div>
      </section>



      

     <section className="experience" id="experience">
    <h2>Experience and Education</h2>
    <div className="exp-cards">
        <div className="exp-card">
            <img src={lppp} alt="The Launchpadteam Inc." className="exp-image" />
            <div className="exp-text">
                <h4>The Launchpadteam Inc.</h4>
                <p>Roles: IT Intern</p>
                <p>Software Developer<br />Wordpress Developer<br />UI/UX Developer<br />IT-Support</p>
            </div>
        </div>
        <div className="exp-card">
            <img src={Cppp} alt="The Cursor Publication" className="exp-image" />
            <div className="exp-text">
                <h4>The Cursor Publication</h4>
                <p>Roles: Member</p>
                <p>Former Cartoon Editor<br />Cartoonist</p>
            </div>
        </div>
        <div className="exp-card">
            <img src={MSU} alt="Mindanao State University Main Campus" className="exp-image" />
            <div className="exp-text">
                <h4>Mindanao State University Main Campus</h4>
                <p>Roles: Student</p>
                <p>Bachelor of Science in Information Technology<br />2020-2025</p>
                
            </div>
        </div>
    </div>
</section>


      <section className="skills" id="skill">
        <h2>Skills</h2>
        <div className="skills-grid">
  <div className="skill">
    <img src="/logos/Vitejs-logo.svg.png" alt="Vite" />
    <span>Vite</span>
  </div>
  <div className="skill">
    <img src="/logos/react.png" alt="React" />
    <span>React</span>
  </div>
  <div className="skill">
    <img src="/logos/php.png" alt="PHP" />
    <span>PHP</span>
  </div>
  <div className="skill">
    <img src="/logos/mySql.png" alt="MySQL" />
    <span>MySQL</span>
  </div>
  <div className="skill">
    <img src="/logos/html.png" alt="HTML" />
    <span>HTML</span>
  </div>
  <div className="skill">
    <img src="/logos/css.png" alt="CSS" />
    <span>CSS</span>
  </div>
  <div className="skill">
    <img src="/logos/js.png" alt="JavaScript" />
    <span>JavaScript</span>
  </div>
  <div className="skill">
    <img src="/logos/mk.png" alt="MikroTik" />
    <span>MikroTik</span>
  </div>
  <div className="skill">
    <img src="/logos/canva.png" alt="Canva" />
    <span>Canva</span>
  </div>
  <div className="skill">
    <img src="/logos/figma.png" alt="figma" />
    <span>Figma</span>
  </div>
</div>

      </section>

      <footer className="contact" id="contact">

  <img src={Image} alt="Logo" className="footer-logo" />

  <p>Email: <a href="mailto:hadjiali.nor.amin.job@gmail.com">hadjiali.nor.amin.job@gmail.com</a></p>
  <p>Cagayan de Oro, Misamis Oriental, Philippines</p>

  <hr className="footer-divider" />

  <div className="footerS">
    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/jd_ali_29/profilecard/?igsh=MTNjN3c3a3J3bThlaQ==" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://github.com/noramin2020" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.facebook.com/Light002911" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;
