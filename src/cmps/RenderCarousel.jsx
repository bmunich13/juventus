import React, { useEffect, useState } from 'react';

export default function RenderCarousel({ items = [], interval = 3000, visibleItems = 1 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  if (!items.length) {
    return <div className="carousel-empty">No items to show</div>;
  }

  return (
    <div className="carousel-wrapper" style={{direction: "ltr", overflow: 'hidden', width: '100%' }}>
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          width: `${items.length * 100}%`,
          transform: `translateX(-${(100 / items.length) * index}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{
              flex: `0 0 ${100 / items.length}%`,
              boxSizing: 'border-box',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}




// import React, { useEffect, useState } from 'react';
// import {  AiAgentCarousel,WeblyCarousel, PostomaticCarousel } from './Carousel';
// import '../cssFiles/carousel.css';
// // import {AiAgentCarousel }from './AiAgentCarousel';

// const carouselMap = {
//   postomatic: PostomaticCarousel,
//   webly: WeblyCarousel,
//   aiagent: AiAgentCarousel,
// };

// export default function RenderCarousel({ keysList = [], lang, t, interval = 3000 }) {
//   const [index, setIndex] = useState(0);

//    useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex(prev => (prev + 1) % keysList.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [keysList, interval]);

//   return (
//     <div className="carousel-wrapper">
//       <div
//         className="carousel-track"
//         style={{
//           display: 'flex',
//           width: `${keysList.length * 100}%`,
//           transform: `translateX(-${(100 / keysList.length) * index}%)`,
//           transition: 'transform 0.5s ease-in-out',
//         }}
//       >
//         {keysList.map((key, i) => {
//           const Component = carouselMap[key];
//           return (
//             <div key={`${key}-${lang}`} className="carousel-item" style={{ flex: `0 0 ${100 / keysList.length}%` }}>
//               <Component t={t} lang={lang} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }