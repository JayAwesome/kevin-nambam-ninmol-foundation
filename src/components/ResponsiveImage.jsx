const DEFAULT_WIDTHS = [360, 640, 960, 1280, 1600];

function buildVariantSrc(src, width, format) {
  const match = src.match(/^(.*\/)([^/]+)\.(jpe?g|png|webp)$/i);

  if (!match) {
    return src;
  }

  const [, directory, fileName] = match;
  return `${directory}optimized/${fileName}-${width}.${format}`;
}

function buildSrcSet(src, widths, format) {
  return widths.map((width) => `${buildVariantSrc(src, width, format)} ${width}w`).join(', ');
}

function ResponsiveImage({
  src,
  alt,
  className,
  pictureClassName,
  widths = DEFAULT_WIDTHS,
  sizes = '(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
}) {
  if (!src) {
    return null;
  }

  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={buildSrcSet(src, widths, 'webp')} sizes={sizes} />
      <source type="image/jpeg" srcSet={buildSrcSet(src, widths, 'jpg')} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchPriority}
      />
    </picture>
  );
}

export default ResponsiveImage;
