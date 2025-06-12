import React from 'react';
import logo from '../../public/logo.svg';
import { FaFileContract, FaShieldAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Mail, Facebook, Phone, Calendar, Instagram, Linkedin } from 'lucide-react';

function Footer({ t }) {
  return (
    <div className="footer full">
      <div className="footer-contact-us">
        <div className="contact-links">
          {/* Email Link */}
          <a
            href="elior0534@gmail.com"
            className="contact-link email-link"
          >
            <Mail className="icon" />
            {/* <span className="link-text">{t.email}</span> */}
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61563095311860 "
            className="contact-link facebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="icon" />
            {/* <span className="link-text">{t.facebook}</span> */}
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/972523440364?text=%D7%90%D7%A0%D7%99%20%D7%A4%D7%95%D7%A0%D7%94%20%D7%91%D7%A0%D7%95%D7%92%D7%A2%20%D7%9C%D7%9E%D7%A2%D7%A8%D7%9B%D7%95%D7%AA%20%D7%9E%D7%91%D7%95%D7%A1%D7%A1%D7%95%D7%AA%20AI
"
            className="contact-link whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="icon" />
            {/* <span className="link-text">{t.whatsApp}</span> */}
          </a>
          {/* Instagram Link */}
          <a
            href="https://instagram.com/yourprofile"
            className="contact-link instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="icon" />
            {/* <span className="link-text">{t.instagram}</span> */}
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourprofile"
            className="contact-link linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="icon" />
            {/* <span className="link-text">{t.linkedIn}</span> */}
          </a>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/terms" className="footer-link">
          <FaFileContract className="footer-icon" />
          <p>{t.footerTerms}</p>
        </Link>
        <Link to="/privacy" className="footer-link">
          <FaShieldAlt className="footer-icon" />
          <p>{t.footerPrivacy}</p>
        </Link>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Taskomatic Logo" />
      </div>
    </div>
  );
}

export default Footer;