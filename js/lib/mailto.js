// js/lib/mailto.js
export function buildMailtoLink({ to, subject, body }) {
  return (
    `mailto:${to}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}
