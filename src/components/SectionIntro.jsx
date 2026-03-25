function SectionIntro({ eyebrow, title, text, description, centered = false }) {
  return (
    <div className={`section-intro-block ${centered ? 'section-intro-centered' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text || description ? <p>{text || description}</p> : null}
    </div>
  );
}

export default SectionIntro;
