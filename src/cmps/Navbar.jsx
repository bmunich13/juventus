import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addGlowEffect } from '../JsFunction';
import { translations } from '../translations';



function Navbar({ onToggleLanguage, currentLang, onToggleTheme, isDarkTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ObjectRef = useRef(null);

  useEffect(() => {
    const cleanup = addGlowEffect(ObjectRef.current);
    return cleanup; // מנקה מאזינים כשהקומפוננטה יוצאת
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-actions">

        <button className="login-button"
          onClick={() => window.location.href = 'https://panel.taskomatic.net/'}>
          Login
        </button>
        <button className="circle-button" onClick={onToggleTheme}>
          {isDarkTheme ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M21 12.79A9 9 0 0111.21 3a9 9 0 1010.58 9.79z" fill="black" />
            </svg>
          )}
        </button>

        <button className="circle-button" onClick={onToggleLanguage}>
          <div className={isDarkTheme ? "color-dark" : "color-light"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>


          </div>

        </button>
        <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && (
          <li>
            <button className="close-button" onClick={() => setIsMenuOpen(false)}>✖</button>
          </li>
        )}
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><a
          href="http://panel.taskomatic.net/ai_agent"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          AI Agent
        </a></li>
        <li>
          <a
            href="http://panel.taskomatic.net/postomatic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Postomatic
          </a>
        </li>
        <li>
          <a
            href="http://panel.taskomatic.net/webly"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Webly
          </a>
        </li>
        <li><Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact us</Link></li>
      </ul>
      <div className="navbar-logo-container">
        <Link to="/">
          <img
            src="https://taskomatic.net/logo.svg"
            alt="Taskomatic Logo"
            ref={ObjectRef}
            className="navbar-logo"
          />
        </Link>
      </div>
    </nav >
  );
}

export default Navbar;
