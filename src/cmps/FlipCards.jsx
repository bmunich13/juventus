// import { useEffect, useRef } from 'react';


// export function FlipCards() {
//   const containerRef = useRef(null);
//   const cards = [
//     {
//       front: 'Innovative AI Solutions',
//       back: 'We utilize cutting-edge AI technologies to automate and optimize your business processes, ensuring maximum efficiency and productivity.'
//     },
//     {
//       front: 'Tailored Approaches',
//       back: 'Our solutions are customized to meet your unique business needs, ensuring that you receive the most effective and relevant services.'
//     },
//     {
//       front: 'Experienced Team',
//       back: 'Our team of experts has extensive experience in AI and business automation, bringing valuable insights and skills to every project.'
//     },
//     {
//       front: 'Seamless Integration',
//       back: 'We ensure smooth integration with your existing systems and platforms, minimizing disruptions and maximizing efficiency.'
//     },
//     {
//       front: 'Comprehensive Support',
//       back: 'We provide ongoing support and maintenance to ensure your systems continue to run smoothly and effectively.'
//     },
//     {
//       front: 'Proven Results',
//       back: 'Our solutions have helped numerous businesses achieve significant improvements in productivity and cost savings.'
//     }
//   ];



//   useEffect(() => {
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         const index = entry.target.dataset.index;

//         if (entry.isIntersecting) {
//           entry.target.style.transitionDelay = `${index * 0.15}s`;
//           entry.target.classList.add('in-view');
//         } else {
//           entry.target.classList.remove('in-view');
//           entry.target.style.transitionDelay = '0.3s'; // אפקט יציאה מהיר
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   const cards = containerRef.current?.querySelectorAll('.flip-card');
//   cards?.forEach(card => observer.observe(card));

//   return () => observer.disconnect();
// }, []);



//   return (
//     <>
//       <h1 className='integration-title'>Why Choose Taskomatic?</h1>
//       <h2 className='integration-description'>Our way to help you scale your business.</h2>
//     <div className="flip-cards-container" ref={containerRef}>
//       {cards.map((card, idx) => (
//         <div className="flip-card" key={idx}>
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <h2>{card.front}</h2>
//             </div>
//             <div className="flip-card-back">
//               <h3>{card.back}</h3>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div></>
//   );
// }




import { useEffect, useRef } from 'react';

export function FlipCards({ t, lang }) {
  const containerRef = useRef(null);
  const cards = t.flipCards.cards;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.dataset.index;

          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
            entry.target.style.transitionDelay = '0.3s';
          }
        });
      },
      { threshold: 0.5 }
    );

    const cards = containerRef.current?.querySelectorAll('.flip-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h1 className="integration-title">{t.flipCards.title}</h1>
      <h2 className="integration-description">{t.flipCards.subtitle}</h2>
      <div className={`flip-cards-container ${lang === 'he' ? 'rtl' : 'ltr'}`} ref={containerRef}>
        {cards.map((card, idx) => (
          <div className="flip-card" key={idx} data-index={idx}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{card.front}</h2>
              </div>
              <div className="flip-card-back">
                <h3>{card.back}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
