import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import './styles.css';

// Components: Navbar, Section, etc.
const Navbar = () => {
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.currentSection);

  // Define state for the toggle button
  const [isOn, setIsOn] = useState(false); // Initialize with false for "Off" state

  // Toggle the isOn state
  const handleToggle = () => {
    setIsOn(!isOn);
    dispatch({ type: 'TOGGLE_DARK_MODE' }); // Dispatch action to toggle dark mode
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button
          className={currentSection === 'home' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_SECTION', payload: 'home' })}
        >
          Home
        </button>
        <button
          className={currentSection === 'skills' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_SECTION', payload: 'skills' })}
        >
          Skills
        </button>
        <button
          className={currentSection === 'projects' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_SECTION', payload: 'projects' })}
        >
          Projects
        </button>
        <button
          className={currentSection === 'about' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_SECTION', payload: 'about' })}
        >
          About Me
        </button>
        <button
          className={currentSection === 'contact' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_SECTION', payload: 'contact' })}
        >
          Contact Me
        </button>
      </div>

      {/* Toggle Button for Theme */}
      <button className="toggle-btn" onClick={handleToggle}>
        <i className={`fa-solid ${isOn ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
        <span>{isOn ? 'On' : 'Off'}</span>
      </button>
    </nav>
  );
};

const Section = ({ id, title, children }) => {
  const currentSection = useSelector((state) => state.currentSection);
  return (
    <section className={`section ${currentSection === id ? 'active' : ''}`} id={id}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="stylesheet" href="styles.css" />
      </Helmet>

      <Navbar />

      <main>
        <Section id="skills" title="My Skills">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>JAVA</li>
            <li>MySql</li>
            <li>jQuary</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <p>Here are some of my recent projects:</p>
          <ul>
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        </Section>
      </main>

      <footer>
        <header>
          <img src="Profile.jpg" alt="Profile Picture" className="profile-pic" />
          <h1>Hi, I'm Piyush 👋</h1>
          <p>Fullstack Developer</p>

          <div>
            <button type="button" className="btn btn-danger">
              <i className="fas fa-envelope"></i> Contact me
            </button>
            <button type="button" className="btn btn-danger">
              <i className="fab fa-github"></i> My Projects
            </button>
          </div>
          <div className="social-media"></div>
          <div className="email-display">email@example.com</div>
        </header>
      </footer>
    </div>
  );
};

export default App;
