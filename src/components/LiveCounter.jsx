import { useEffect, useRef, useState } from 'react';

function formatValue(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function LiveCounter({ countTo, suffix = '', duration = 1600, className = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;

    if (!node || hasStarted) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayValue(Math.round(countTo * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [countTo, duration, hasStarted]);

  return (
    <strong ref={counterRef} className={className} aria-label={`${formatValue(countTo)}${suffix}`}>
      {formatValue(displayValue)}
      {suffix}
    </strong>
  );
}

export default LiveCounter;
