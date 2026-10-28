import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)!;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;

/* ---------- Header turns to glass once the page leaves the top ---------- */
const header = $('.site-header');
const setHeader = () => header.classList.toggle('is-scrolled', scrollY > 24);
addEventListener('scroll', setHeader, { passive: true });
setHeader();

/* ---------- Notify form opens a pre-filled email ---------- */
const form = $<HTMLFormElement>('.notify');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = form.dataset.body!.replace('{email}', String(data.get('email'))).replace('{platform}', String(data.get('platform')));
  location.href = `mailto:${form.dataset.mail}?subject=${encodeURIComponent(form.dataset.subject!)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Module wheel: one 60° step per module ---------- */
const rotor = $<SVGGElement>('.wheel-rotor');
const names = $$<HTMLButtonElement>('.module-name');
const cards = $$('.module-card');
const markers = $$<SVGCircleElement>('.w-marker');
let current = -1;
const setModule = (i: number, animate = true) => {
  if (i === current) return;
  current = i;
  names.forEach((b, j) => {
    b.classList.toggle('is-active', j === i);
    b.setAttribute('aria-pressed', String(j === i));
  });
  cards.forEach((c, j) => c.classList.toggle('is-active', j === i));
  markers.forEach((m, j) => m.classList.toggle('is-active', j === i));
  gsap.to(rotor, { rotation: -i * 60, svgOrigin: '0 0', duration: animate && !reduce ? 1.1 : 0, ease: 'expo.out' });
};
setModule(0, false);
let jumpTo = (i: number) => setModule(i);
names.forEach((b) => b.addEventListener('click', () => jumpTo(Number(b.dataset.index))));

/* ---------- Everything that moves ---------- */
if (!reduce) {
  const lenis = new Lenis({ anchors: { offset: -64 }, lerp: 0.1, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  $$<HTMLAnchorElement>('a[href="#main"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      lenis.scrollTo(0);
    }),
  );

  // Hero: letters rise out of the dark, then the copy and actions settle in.
  const chars = $$('.hero .ch');
  gsap.set(chars, { yPercent: 110, rotate: 8, opacity: 0 });
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 });
  intro
    .to(chars, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.4, stagger: 0.035 })
    .from('.hero-sub', { y: 24, opacity: 0, duration: 1.2 }, '-=0.9')
    .from('.hero-actions > *', { y: 20, opacity: 0, duration: 1, stagger: 0.1 }, '-=0.9')
    .from('.scroll-hint', { opacity: 0, duration: 1 }, '-=0.6');
  root.classList.add('motion-ready');

  // The hero copy drifts up and dims as the night begins.
  gsap.to('.hero-copy', {
    yPercent: -18,
    opacity: 0.15,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  const mm = gsap.matchMedia();

  // Vista: the range rises layer by layer while the five lines arrive one by one.
  mm.add('(min-width: 0px)', () => {
    const lines = $$('.vista-line');
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: '.vista', start: 'top top', end: '+=260%', scrub: 0.8, pin: '.vista-stage', anticipatePin: 1 },
    });
    tl.fromTo('.layer-sky', { scale: 1.18, yPercent: -4 }, { scale: 1, yPercent: 4, duration: 10 }, 0)
      .fromTo('.layer-far', { yPercent: 16 }, { yPercent: 2, duration: 10 }, 0)
      .fromTo('.layer-mid', { yPercent: 34 }, { yPercent: 4, duration: 10 }, 0)
      .fromTo('.layer-near', { yPercent: 52, scale: 1.04 }, { yPercent: 6, scale: 1, duration: 10 }, 0)
      .fromTo('.mist-1', { xPercent: -12, opacity: 0.4 }, { xPercent: 8, opacity: 0.9, duration: 10 }, 0)
      .fromTo('.mist-2', { xPercent: 10, opacity: 0.3 }, { xPercent: -10, opacity: 0.8, duration: 10 }, 0);
    lines.forEach((line, i) => {
      tl.fromTo(line, { opacity: 0, y: 40, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }, 1 + i * 1.25);
    });
    tl.fromTo('.vista-note', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, 7.6);
    // Walk through the gap between the cliffs.
    tl.to('.layer-near', { scale: 1.35, yPercent: 10, duration: 3, ease: 'power1.in' }, 10)
      .to('.vista-copy', { opacity: 0, y: -40, duration: 2 }, 10.4)
      .to('.vista-stage', { opacity: 0, duration: 1.6 }, 11.4);
  });

  // Features: each line fills from mist to paper as it crosses the screen.
  $$('.feature').forEach((el) => {
    const text = $('.feature-text span', el);
    gsap.fromTo(
      text,
      { '--fill': '0%' },
      { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'top 30%', scrub: true } },
    );
    gsap.from([$('.feature-num', el), $('.feature-detail', el)], {
      opacity: 0,
      y: 24,
      duration: 1.1,
      stagger: 0.12,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 70%' },
    });
  });
  gsap.from('.section-kicker', { opacity: 0, y: 20, duration: 1, scrollTrigger: { trigger: '.features', start: 'top 75%' } });

  // Modules: the wheel is pinned and every module takes one step of scroll.
  mm.add('(min-width: 0px)', () => {
    const steps = names.length;
    const st = ScrollTrigger.create({
      trigger: '.modules',
      start: 'top top',
      end: () => `+=${innerHeight * 0.7 * steps}`,
      pin: '.modules-stage',
      anticipatePin: 1,
      snap: { snapTo: 1 / (steps - 1), duration: { min: 0.2, max: 0.6 }, ease: 'power2.inOut', delay: 0.05 },
      onUpdate: (self) => setModule(Math.round(self.progress * (steps - 1))),
    });
    jumpTo = (i) => lenis.scrollTo(st.start + ((st.end - st.start) * i) / (steps - 1), { duration: 1.2 });
    gsap.from('.wheel', {
      scale: 0.7,
      rotate: -90,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.modules', start: 'top 70%' },
    });
    return () => {
      jumpTo = (i) => setModule(i);
    };
  });

  // About: the moon waxes from new to full across the section.
  gsap.fromTo(
    '.moon-shadow',
    { attr: { cx: 100 } },
    { attr: { cx: 290 }, ease: 'none', scrollTrigger: { trigger: '.about', start: 'top 85%', end: 'bottom 40%', scrub: 0.6 } },
  );
  gsap.fromTo('.moon', { yPercent: 20 }, { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '.about', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.about-title .line', { yPercent: 60, opacity: 0, duration: 1.4, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.about-title', start: 'top 80%' } });
  gsap.from('.about-body > *', { y: 32, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.about-body', start: 'top 80%' } });
  gsap.fromTo(
    '.about-figure',
    { clipPath: 'inset(100% 0% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: '.about-figure', start: 'top 80%' } },
  );
  gsap.fromTo('.about-figure img', { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.about-figure', start: 'top bottom', end: 'bottom top', scrub: true } });

  // FAQ: the hexagram is drawn line by line from the bottom up.
  const strokes = $$<SVGPathElement>('.hexagram path').reverse();
  gsap.fromTo(
    strokes,
    { strokeDashoffset: 1 },
    { strokeDashoffset: 0, duration: 0.7, stagger: 0.16, ease: 'power2.inOut', scrollTrigger: { trigger: '.faq', start: 'top 70%' } },
  );
  gsap.from('.faq-title', { y: 30, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.faq', start: 'top 70%' } });
  gsap.from('.faq-item', { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.faq-list', start: 'top 80%' } });

  // CTA: dawn breaks as the section scrolls in.
  gsap.fromTo(
    '.cta',
    { '--dawn': 0 },
    { '--dawn': 1, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'center center', scrub: true } },
  );
  gsap.from('.cta-title .line', { yPercent: 60, opacity: 0, duration: 1.4, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.cta', start: 'top 60%' } });
  gsap.from('.notify', { y: 60, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.cta', start: 'top 50%' } });

  // A soft gold light follows the pointer, and buttons lean toward it.
  if (finePointer) {
    const glow = $('.cursor-glow');
    const gx = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3' });
    const gy = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3' });
    addEventListener('pointermove', (e) => {
      glow.classList.add('is-on');
      gx(e.clientX);
      gy(e.clientY);
    });
    document.addEventListener('pointerleave', () => glow.classList.remove('is-on'));

    $$('.magnetic').forEach((el) => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
      const my = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * 0.3);
        my((e.clientY - r.top - r.height / 2) * 0.4);
      });
      el.addEventListener('pointerleave', () => {
        mx(0);
        my(0);
      });
    });
  }

  // Images and fonts change heights after load; re-measure the pins.
  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
} else {
  root.classList.add('motion-ready');
}

/* ---------- The WebGL night sky loads once the page is idle ---------- */
const canvas = $<HTMLCanvasElement>('.sky-canvas');
const startSky = () =>
  import('./sky')
    .then(({ startSky }) => startSky(canvas, { reduce }))
    .catch(() => canvas.remove());
if ('requestIdleCallback' in window) requestIdleCallback(startSky, { timeout: 1500 });
else setTimeout(startSky, 200);
