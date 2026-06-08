function formatValue(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function LiveCounter({ countTo, suffix = '', className = '' }) {
  return (
    <strong className={className} aria-label={`${formatValue(countTo)}${suffix}`}>
      {formatValue(countTo)}
      {suffix}
    </strong>
  );
}

export default LiveCounter;
