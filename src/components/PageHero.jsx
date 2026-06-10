import ResponsiveImage from './ResponsiveImage';

function PageHero({ eyebrow, title, subtitle, image, imageAlt = '' }) {
  return (
    <section className="page-hero">
      {image ? (
        <ResponsiveImage
          src={image}
          alt={imageAlt}
          pictureClassName="page-hero-picture"
          className="page-hero-image"
          widths={[640, 960, 1280, 1600]}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      ) : null}
      <span className="page-hero-overlay" aria-hidden="true" />
      <div className="container page-hero-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;
