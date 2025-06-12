import { useState, useEffect } from 'react'
import { ScrollToTop } from './cmps/ScrollToTop'
import './cssFiles/main.css'
import { AiAgent } from './cmps/AiAgent'
import { Webly } from './cmps/Webly'
import { Postomatic } from './cmps/Postomatic'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { translations } from './translations'
import Navbar from './cmps/Navbar'
import HomePage from './cmps/HomePage'
import Footer from './cmps/Footer'
import ContactUs from './cmps/ContactUs'
import { AiAgentCarousel, PostomaticCarousel, WeblyCarousel } from './cmps/Carousel'
import TermOfService from "./cmps/TermOfService";
import PrivacyPolicy from './cmps/PrivacyPolicy';




function App() {
  const [lang, setLang] = useState('en');

  const [theme, setTheme] = useState('theme-default');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'theme-default' ? 'theme-alt' : 'theme-default';
    setTheme(newTheme);
    document.body.classList.remove('theme-default', 'theme-alt');
    document.body.classList.add(newTheme);
  };

  const t = translations[lang];

  const toggleLang = () => {
    const newLang = lang === 'he' ? 'en' : 'he';
    setLang(newLang);
    document.body.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  const items = [
    <PostomaticCarousel key={`postomatic-${lang}`} lang={lang} t={t} />,
    <WeblyCarousel key={`webly-${lang}`} lang={lang} t={t} />,
    <AiAgentCarousel key={`aiagent-${lang}`} lang={lang} t={t} />,
  ];
  const carouselKeys = ['postomatic', 'webly', 'aiagent'];

  return (
    <Router>
      <ScrollToTop />
      <div className="main-container">
        <Navbar
          currentLang={lang}
          onToggleLanguage={toggleLang}
          onToggleTheme={toggleTheme}
          isDarkTheme={theme === 'theme-alt'}
        />
        <main className="content-area">

          <Routes>
            <Route path="/" element={
              <>
                <HomePage t={t} />

              </>
            } />
            <Route path="/contact-us" element={<ContactUs t={t} />} />
            <Route path="/terms" element={<TermOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App
