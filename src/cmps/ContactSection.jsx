import React from 'react';
import '../cssFiles/cmps/ContactSection.css'; // סגנון תואם

function ContactSection({ t }) {
    return (
        <section className="contact-section">
            <h1 className="section-title">let's talk</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h1 >{t.contactUsH1}</h1>
                    <h2>{t.contactUsH2}</h2>
                    <div className="contact-details">
                        <a
                            href="https://calendly.com/your-calendar-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                        >
                            {t.contactUsButton}👇
                        </a>
                    </div>
                </div>
                <form className="contact-form">
                    <h2>{t.contactUsH1_1}</h2>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your message" rows="5" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
