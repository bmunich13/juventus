import React, { useState, useRef } from 'react';
import '../cssFiles/cmps/CarouselNew.css'; 
import { useSwipeable } from 'react-swipeable';


const CarouselNew = ({ t }) => {

  const [activeIndex, setActiveIndex] = useState(1);
  const lastSwitchTime = useRef(Date.now());
  const cooldown = 800; // מניעת החלפות מהירות
  const handleHover = (index) => {
    const now = Date.now();
    if (index !== activeIndex && now - lastSwitchTime.current > cooldown) {
      setActiveIndex(index);
      lastSwitchTime.current = now;
    }
  };

  const handlers = useSwipeable({
  onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % cards.length),
  onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length),
  preventScrollOnSwipe: true,
  trackMouse: true,
});

  const cards = [
    {
      id: 0,
      h1: t.weblyH1,
      title: t.weblyTitle,
      text: t.weblySubtitle,
      link: 'http://panel.taskomatic.net/webly',
    },
    {
      id: 1,
      h1: t.aiagentTitle,
      title: '',
      text: t.aiagentSubtitle,
      link: 'http://panel.taskomatic.net/ai_agent',
    },
    {
      id: 2,
      h1: t.postomaticH1,
      title: t.postomaticTitle,
      text: t.postomaticSubtitle,
      link: 'http://panel.taskomatic.net/postomatic',
    },
  ];

  return (
    <div {...handlers} className="carousel-wrapper">
      {cards.map((card, index) => {
        const isActive = index === activeIndex;
        const isLeft = index === (activeIndex + 2) % 3;
        const isRight = index === (activeIndex + 1) % 3;

        return (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`carousel-card ${isActive ? 'active' : isLeft ? 'left' : 'right'}`}
            onMouseEnter={() => handleHover(index)}
          >
            <div className="card-content">
              <h1 className="card-title">{card.h1}</h1>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default CarouselNew;
