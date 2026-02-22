export function AnalyticsPlaceholder() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      {/* Google Analytics or Plausible script can be injected here */}
    </>
  );
}
