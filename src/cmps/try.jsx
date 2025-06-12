import { Sparkles, LayoutTemplate, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./SmartBusinessSiteHero.css";

export default function SmartBusinessSiteHero({ t = {}, lang: initialLang = "he" }) {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState(initialLang);

  const fallback = translations[lang] || translations.he;
  const content = {
    title: t.title || fallback.title,
    subtitle: t.subtitle || fallback.subtitle,
    ctaPrimary: t.ctaPrimary || fallback.ctaPrimary,
    ctaSecondary: t.ctaSecondary || fallback.ctaSecondary,
    features: {
      aiTitle: t.features?.aiTitle || fallback.features.aiTitle,
      aiDesc: t.features?.aiDesc || fallback.features.aiDesc,
      siteTitle: t.features?.siteTitle || fallback.features.siteTitle,
      siteDesc: t.features?.siteDesc || fallback.features.siteDesc,
      socialTitle: t.features?.socialTitle || fallback.features.socialTitle,
      socialDesc: t.features?.socialDesc || fallback.features.socialDesc
    }
  };

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(match.matches);
    match.addEventListener("change", (e) => setIsDark(e.matches));
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleLang = () => setLang((prev) => (prev === "he" ? "en" : "he"));

  return (
    <section
      dir={lang === "he" ? "rtl" : "ltr"}
      className={`hero-section ${isDark ? "dark-mode" : "light-mode"}`}
    >
      <div className="top-controls">
        <button className="top-button" onClick={toggleTheme}>
          {isDark ? "☀️" : "🌙"}
        </button>
        <button className="top-button" onClick={toggleLang}>
          {lang === "he" ? "EN" : "HE"}
        </button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-title"
      >
        {content.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="hero-subtitle"
      >
        {content.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hero-buttons"
      >
        <button className="primary-btn">
          🚀 {content.ctaPrimary}
        </button>
        <button className="secondary-btn">
          ✨ {content.ctaSecondary}
        </button>
      </motion.div>

      <div className="features-grid">
        <FeatureCard
          title={content.features.aiTitle}
          description={content.features.aiDesc}
          icon={<Sparkles className="icon-spin" />}
        />
        <FeatureCard
          title={content.features.siteTitle}
          description={content.features.siteDesc}
          icon={<LayoutTemplate className="icon-bounce" />}
        />
        <FeatureCard
          title={content.features.socialTitle}
          description={content.features.socialDesc}
          icon={<Megaphone className="icon-wiggle" />}
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}

// Example translations
export const translations = {
  he: {
    title: "כל מה שעסק חכם צריך, בשלושה קליקים.",
    subtitle:
      "סוכן AI אישי, בונה אתרים מרהיב, וכלי פרסום חכם לרשתות – בממשק אחד פשוט.",
    ctaPrimary: "נסו את זה בחינם",
    ctaSecondary: "איך זה עובד?",
    features: {
      aiTitle: "סוכן AI אישי",
      aiDesc: "עוזר חכם 24/7 שיכול לחשוב, לכתוב ולייעץ.",
      siteTitle: "בניית אתרים מהירה",
      siteDesc: "אתר מהמם ב-3 צעדים. בלי קוד, בלי כאב ראש.",
      socialTitle: "פוסטים מנצחים",
      socialDesc: "צרו ושתפו פוסטים שיווקיים מעוצבים בלחיצה."
    }
  },
  en: {
    title: "Everything Your Smart Business Needs – In Three Clicks",
    subtitle:
      "Your own AI agent, stunning website builder, and social media toolkit – all in one intuitive platform.",
    ctaPrimary: "Try it Free",
    ctaSecondary: "How It Works",
    features: {
      aiTitle: "Personal AI Agent",
      aiDesc: "Smart assistant that writes, thinks and helps – 24/7.",
      siteTitle: "Website Builder",
      siteDesc: "Create a stunning site in 3 steps. No code needed.",
      socialTitle: "Social Media Booster",
      socialDesc: "Create and publish scroll-stopping posts in one click."
    }
  }
};
