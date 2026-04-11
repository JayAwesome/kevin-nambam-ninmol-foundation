import { Link } from 'react-router-dom';

function SectionIntro({ eyebrow, title, text, description, centered = false, ctaLabel, ctaTo }) {
  return (
    <div className={`section-intro-block ${centered ? 'section-intro-centered' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text || description ? <p>{text || description}</p> : null}
      {ctaLabel && ctaTo ? (
        <Link to={ctaTo} className="section-intro-link">
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  );
}

export default SectionIntro;
