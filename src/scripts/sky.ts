import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  TorusGeometry,
  WebGLRenderer,
} from 'three';

const GOLD = new Color('#D7B67A');
const PAPER = new Color('#EDE6D6');
const MIST = new Color('#8794AE');

/** Fixed full-page night sky with an astrolabe hanging in the hero. */
export function startSky(canvas: HTMLCanvasElement, { reduce }: { reduce: boolean }) {
  const small = matchMedia('(max-width: 760px)').matches;
  const renderer = new WebGLRenderer({ canvas, antialias: !small, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.25 : 1.6));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 6;

  /* ---------- Stars ---------- */
  const count = small ? 900 : 2400;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const size = new Float32Array(count);
  const phase = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    // A thick shell around the camera so the field has depth when it turns.
    const r = 14 + Math.random() * 26;
    const u = Math.random() * 2 - 1;
    const a = Math.random() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    pos.set([Math.cos(a) * s * r, u * r * 0.7, Math.sin(a) * s * r - 8], i * 3);
    const tint = Math.random();
    const c = tint > 0.9 ? GOLD : tint > 0.55 ? MIST : PAPER;
    col.set([c.r, c.g, c.b], i * 3);
    size[i] = Math.random() ** 3 * 2.6 + 0.6;
    phase[i] = Math.random() * Math.PI * 2;
  }
  const starGeo = new BufferGeometry();
  starGeo.setAttribute('position', new BufferAttribute(pos, 3));
  starGeo.setAttribute('color', new BufferAttribute(col, 3));
  starGeo.setAttribute('size', new BufferAttribute(size, 1));
  starGeo.setAttribute('phase', new BufferAttribute(phase, 1));
  const starMat = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPixel: { value: renderer.getPixelRatio() } },
    vertexShader: /* glsl */ `
      attribute float size;
      attribute float phase;
      attribute vec3 color;
      uniform float uTime;
      uniform float uPixel;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * uPixel * (34.0 / -mv.z);
        vColor = color;
        vAlpha = 0.55 + 0.45 * sin(uTime * (0.6 + fract(phase) * 1.4) + phase);
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor, a * a * vAlpha);
      }`,
  });
  const stars = new Points(starGeo, starMat);
  scene.add(stars);

  /* ---------- Astrolabe ---------- */
  const astro = new Group();
  scene.add(astro);
  const mats: { m: MeshBasicMaterial | LineBasicMaterial | SpriteMaterial; base: number }[] = [];
  const gold = (opacity: number) => {
    const m = new MeshBasicMaterial({ color: GOLD, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false });
    mats.push({ m, base: opacity });
    return m;
  };
  const ring = (radius: number, tube: number, opacity: number) => new Mesh(new TorusGeometry(radius, tube, 6, 180), gold(opacity));

  const face = ring(1.6, 0.012, 0.9);
  const rim = ring(1.72, 0.006, 0.45);
  astro.add(face, rim);

  // Degree ticks on the face, longer every 30°.
  const tickPts: number[] = [];
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    const inner = i % 6 === 0 ? 1.42 : 1.52;
    tickPts.push(Math.cos(a) * inner, Math.sin(a) * inner, 0, Math.cos(a) * 1.6, Math.sin(a) * 1.6, 0);
  }
  const tickGeo = new BufferGeometry();
  tickGeo.setAttribute('position', new BufferAttribute(new Float32Array(tickPts), 3));
  const tickMat = new LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.7, blending: AdditiveBlending });
  mats.push({ m: tickMat, base: 0.7 });
  astro.add(new LineSegments(tickGeo, tickMat));

  // Armillary rings, each turning on its own axis.
  const spinners: { obj: Group; axis: 'x' | 'y' | 'z'; speed: number }[] = [];
  const armillary = (radius: number, tube: number, opacity: number, tilt: [number, number, number], axis: 'x' | 'y' | 'z', speed: number) => {
    const holder = new Group();
    holder.rotation.set(...tilt);
    const spin = new Group();
    spin.add(ring(radius, tube, opacity));
    holder.add(spin);
    astro.add(holder);
    spinners.push({ obj: spin, axis, speed });
    return spin;
  };
  armillary(1.32, 0.009, 0.75, [Math.PI / 2, 0, 0], 'z', 0.05);
  armillary(1.18, 0.008, 0.6, [0, Math.PI / 2.6, 0], 'y', 0.08);
  const ecliptic = armillary(0.98, 0.01, 0.8, [Math.PI / 2 - 0.41, 0, 0.3], 'z', -0.12);
  armillary(0.62, 0.006, 0.55, [0.8, 0.4, 0], 'x', 0.16);

  // A planet riding the ecliptic.
  const planet = new Mesh(new SphereGeometry(0.045, 16, 16), gold(1));
  planet.position.set(0.98, 0, 0);
  ecliptic.add(planet);

  // Glowing core.
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 128;
  const g = glowCanvas.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,240,205,1)');
  grad.addColorStop(0.18, 'rgba(215,182,122,0.55)');
  grad.addColorStop(1, 'rgba(215,182,122,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const coreMat = new SpriteMaterial({ map: new CanvasTexture(glowCanvas), blending: AdditiveBlending, depthWrite: false, transparent: true });
  mats.push({ m: coreMat, base: 1 });
  const core = new Sprite(coreMat);
  core.scale.setScalar(1.3);
  astro.add(core);

  /* ---------- Layout, input, loop ---------- */
  let home = { x: 0, y: 0, scale: 1, dim: 1 };
  const resize = () => {
    const w = innerWidth;
    const h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const wide = w / h > 1.1;
    // Beside the headline on wide screens, behind it (and dimmer) on tall ones.
    home = wide ? { x: 2.15 * Math.min(w / h / 1.6, 1.25), y: 0.05, scale: 1.05, dim: 1 } : { x: 0, y: 1.1, scale: 0.78, dim: 0.42 };
    astro.scale.setScalar(home.scale);
  };
  resize();

  const pointer = { x: 0, y: 0 };
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = (e.clientY / innerHeight) * 2 - 1;
  });

  let t = 0;
  let last = performance.now();
  let running = false;
  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!reduce) t += dt;
    starMat.uniforms.uTime.value = t;

    const scrolled = scrollY / innerHeight;
    stars.rotation.y = t * 0.006 + scrolled * 0.08;
    stars.rotation.x = scrolled * 0.05;

    const visible = scrolled < 1.4;
    astro.visible = visible;
    if (visible) {
      spinners.forEach(({ obj, axis, speed }) => (obj.rotation[axis] = t * speed * 4));
      astro.rotation.x += (pointer.y * 0.35 + 0.15 - astro.rotation.x) * 0.05;
      astro.rotation.y += (pointer.x * 0.5 - 0.25 - astro.rotation.y) * 0.05;
      astro.position.set(home.x, home.y + Math.sin(t * 0.6) * 0.06 + scrolled * 2.6, 0);
      const fade = Math.max(0, 1 - scrolled * 0.9) * home.dim;
      mats.forEach(({ m, base }) => (m.opacity = base * fade));
      core.scale.setScalar(1.3 + Math.sin(t * 1.4) * 0.08);
    }
    renderer.render(scene, camera);
    if (running) requestAnimationFrame(frame);
  };

  const play = () => {
    if (running || reduce) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  };
  const pause = () => (running = false);
  const once = () => frame(performance.now());

  addEventListener('resize', () => {
    resize();
    if (!running) once();
  });
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()));
  if (reduce) addEventListener('scroll', once, { passive: true });

  once();
  canvas.classList.add('is-on');
  play();
}
