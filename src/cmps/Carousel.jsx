import { useNavigate } from "react-router-dom";

export function WeblyCarousel({ t }) {
    const navigate = useNavigate();

  return (
    <div className="carousel-box">
      <img src="https://res.cloudinary.com/dv2brrhll/image/upload/v1739186301/samples/landscapes/nature-mountains.jpg" alt={t.weblyImageAlt} className="carousel-image" />
      <div className="carousel-content">
        <h2>{t.weblyTitle}</h2>
        <p>{t.weblySubtitle}</p>
        <button className="theme-button" onClick={() => navigate('/webly')}>{t.weblyButton}</button>
      </div>
    </div>
  );
}

export function AiAgentCarousel({ t }) {
    const navigate = useNavigate();

  return (
    <div className="carousel-box">
      <img src="https://res.cloudinary.com/dv2brrhll/image/upload/v1739186309/samples/balloons.jpg" alt={t.aiagentImageAlt} className="carousel-image" />
      <div className="carousel-content">
        <h2>{t.aiagentTitle}</h2>
        <p>{t.aiagentSubtitle}</p>
        <button className="theme-button" onClick={() => navigate('/ai-agent')}>{t.aiagentButton}</button>
      </div>
    </div>
  );
}


export function PostomaticCarousel({ t }) {
    const navigate = useNavigate();

  return (
    <div className="carousel-box">
      <img src="https://res.cloudinary.com/dv2brrhll/image/upload/v1739186299/samples/food/fish-vegetables.jpg" alt={t.postomaticImageAlt} className="carousel-image" />
      <div className="carousel-content">
        <h2>{t.postomaticTitle}</h2>
        <p>{t.postomaticSubtitle}</p>
        <button className="theme-button" onClick={() => navigate('/postomatic')}>{t.postomaticButton}</button>
      </div>
    </div>
  );
}