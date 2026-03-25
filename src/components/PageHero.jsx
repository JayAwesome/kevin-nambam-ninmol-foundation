function PageHero({ eyebrow, title, subtitle, image }) {
  const style = image
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(13, 27, 42, 0.94), rgba(13, 27, 42, 0.78)), url('${image}')`,
      }
    : undefined;

  return (
    <section className="page-hero" style={style}>
      <div className="container page-hero-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;
