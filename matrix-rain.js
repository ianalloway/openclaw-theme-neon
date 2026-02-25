/**
 * openclaw-theme-neon — matrix-rain.js
 * Standalone canvas-based Matrix rain effect.
 * Drop a <canvas class="neon-matrix-rain" id="matrix-rain"></canvas>
 * in your HTML, then call: MatrixRain.init()
 *
 * Reads CSS custom properties from :root for configuration:
 *   --matrix-density  (0.01–0.10, default 0.03)
 *   --matrix-speed    (multiplier, default 1.0)
 *   --matrix-opacity  (canvas opacity, default 0.18)
 *   --neon-primary    (drop color, default #00ff41)
 *
 * MIT License — Ian Alloway
 */

const MatrixRain = (() => {
  const KATAKANA =
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
  const LATIN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  const CHARS = KATAKANA + LATIN;

  let canvas, ctx, drops, animId;
  let cols, fontSize, density, speed, color;

  function getCSSVar(name, fallback) {
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return val || fallback;
  }

  function readConfig() {
    density = parseFloat(getCSSVar('--matrix-density', '0.03'));
    speed   = parseFloat(getCSSVar('--matrix-speed',   '1.0'));
    color   = getCSSVar('--neon-primary', '#00ff41');
  }

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = 14;
    cols     = Math.floor(canvas.width / fontSize);
    drops    = Array.from({ length: cols }, () =>
      Math.random() > 0.5 ? Math.random() * -canvas.height / fontSize : 1
    );
  }

  let lastTime = 0;
  const BASE_FPS = 20;

  function draw(timestamp) {
    animId = requestAnimationFrame(draw);

    const interval = 1000 / (BASE_FPS * speed);
    if (timestamp - lastTime < interval) return;
    lastTime = timestamp;

    // Semi-transparent black overlay creates the fade trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;

    for (let i = 0; i < cols; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Lead character is bright white
      const isLead = drops[i] > 1 && Math.random() > 0.85;
      ctx.fillStyle = isLead ? '#ffffff' : color;
      ctx.shadowColor = color;
      ctx.shadowBlur  = isLead ? 8 : 4;

      ctx.fillText(char, x, y);

      // Reset drop randomly or when it leaves screen
      if (y > canvas.height && Math.random() > 1 - density) {
        drops[i] = 0;
      }

      drops[i] += 0.5;
    }
  }

  function init(canvasId = 'matrix-rain') {
    canvas = document.getElementById(canvasId);
    if (!canvas) {
      console.warn('[MatrixRain] Canvas not found:', canvasId);
      return;
    }

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    ctx = canvas.getContext('2d');
    readConfig();
    resize();

    window.addEventListener('resize', () => {
      readConfig();
      resize();
    });

    requestAnimationFrame(draw);
    console.log('[MatrixRain] Initialized. density=%s speed=%s', density, speed);
  }

  function destroy() {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  /** Change variant on the fly */
  function setVariant(variant) {
    const variants = {
      neon:       '#00ff41',
      'neon-blue': '#00d4ff',
      'neon-amber':'#ffcc00',
      'neon-red':  '#ff3333',
    };
    const c = variants[variant];
    if (c) {
      document.documentElement.style.setProperty('--neon-primary', c);
      readConfig();
    }
  }

  return { init, destroy, setVariant };
})();

// Auto-init if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => MatrixRain.init());
} else {
  MatrixRain.init();
}

// Export for module environments
if (typeof module !== 'undefined') module.exports = MatrixRain;
if (typeof window !== 'undefined') window.MatrixRain = MatrixRain;
