// Fades `[data-reveal]` elements in as they scroll into view. Only runs when the
// head script set `.motion` (motion not reduced); otherwise CSS shows them as is.
const root = document.documentElement;

if (root.classList.contains('motion')) {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }
}
