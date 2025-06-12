
// פונקציה שמגדילה אובייקט כאשר העכבר עליו
export function animateOnHover(selector) {
  const elements = document.querySelectorAll(selector);// בוחר את כל האובייקטים לפי הסלקטור שנשלח לפונקציה

  elements.forEach(el => {
    el.style.transition = "transform 0.3s ease";//עכבר על אובייקט המתנה של 0.3 שניות לצורך כניסה חלקה
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.05)";// הגדלה של האובייקט ב 5%
    });
    el.addEventListener("mouseleave", () => {// כאשר העכבר יוצא מהאובייקט
      el.style.transform = "scale(1)";// החזרת האובייקט לגודלו המקורי
    });
  });
}




// themeFunctions.js

export function toggleTheme(isAltTheme, setIsAltTheme) {
  const newTheme = !isAltTheme;
  setIsAltTheme(newTheme);

  // החלפת מחלקות של <body> לפי מצב
  document.body.classList.remove('theme-default', 'theme-alt');
  document.body.classList.add(newTheme ? 'theme-alt' : 'theme-default');
} 


 export const toggleLanguage = () => {
        const newLang = lang === 'he' ? 'en' : 'he';
        setLang(newLang);
        document.body.dir = newLang === 'he' ? 'rtl' : 'ltr'; // שינוי כיוון טקסט
    };

export function addGlowEffect(element){
  if(!element) return;

  const hendelMouseEnter = () => element.classList.add('glow');
  const hendelMouseLeave = () => element.classList.remove('glow');

  element.addEventListener('mouseenter', hendelMouseEnter);
  element.addEventListener('mouseleave', hendelMouseLeave);
  return () => {
    element.removeEventListener('mouseenter', hendelMouseEnter);
    element.removeEventListener('mouseleave', hendelMouseLeave);
  };
}