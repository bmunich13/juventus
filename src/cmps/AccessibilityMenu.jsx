import '../cssFiles/cmps/accessibility-menu.css';
import React, { useState } from 'react';

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [readingMode, setReadingMode] = useState(false);

  const changeFontSize = (delta) => {
    const newSize = Math.max(80, Math.min(150, fontSize + delta));
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}%`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast', !highContrast);
  };

  const toggleReadingMode = () => {
    setReadingMode(!readingMode);
    document.body.classList.toggle('reading-mode', !readingMode);
  };

  return (
    <div className="accessibility-wrapper">
      {open && (
        <div className="accessibility-menu">
          <button onClick={() => changeFontSize(10)}>הגדלת טקסט</button>
          <button onClick={() => changeFontSize(-10)}>הקטנת טקסט</button>
          <button onClick={toggleContrast}>ניגודיות גבוהה</button>
          <button onClick={toggleReadingMode}>מצב קריאה</button>
        </div>
      )}
      <button
        className="accessibility-button"
        onClick={() => setOpen(!open)}
        aria-label="תפריט נגישות"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm8 6H4a1 1 0 100 2h7v12a1 1 0 102 0V10h7a1 1 0 100-2z"/>
</svg>

      </button>
    </div>
  );



}