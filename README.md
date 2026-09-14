# openclaw-theme-neon

**Neon cyberpunk theme for OpenClaw.** Matrix rain canvas, glowing terminals, dark-glass panels — make your personal AI assistant look like it's running in 2077.

**Repo:** [github.com/ianalloway/openclaw-theme-neon](https://github.com/ianalloway/openclaw-theme-neon)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-Compatible-brightgreen)](https://openclaw.ai)
[![CSS + JS](https://img.shields.io/badge/stack-CSS%20%2B%20JS-00ff41)](theme.css)
[![Live preview](https://img.shields.io/badge/preview-GitHub%20Pages-00ff41)](https://ianalloway.github.io/openclaw-theme-neon/)

**Live preview:** [ianalloway.github.io/openclaw-theme-neon](https://ianalloway.github.io/openclaw-theme-neon/) — variant switcher, matrix rain toggle, CSS variable editor.

## Features

- 🌧️ **Matrix rain** background via `matrix-rain.js` (canvas; density/speed from CSS variables)
- 💚 **Neon green** primary accent with hot-pink secondary (plus color variants)
- 🪟 **Dark-glass** panel effect with frosted backdrop blur
- ⌨️ **Monospace everything** — IBM Plex Mono throughout
- 🔴 **Glowing borders** with pulse animation on active elements
- 📱 Responsive — works on mobile terminal views
- ♿ Reduced-motion mode respects `prefers-reduced-motion` (rain disabled)

## Install

### Manual (themes directory)

```bash
git clone https://github.com/ianalloway/openclaw-theme-neon.git
mkdir -p ~/.openclaw/themes/neon
cp theme.css variables.css matrix-rain.js ~/.openclaw/themes/neon/
# optional variants:
cp -r variants ~/.openclaw/themes/neon/
```

In `openclaw.config.yaml`:

```yaml
theme: neon
```

### ClawHub

```bash
openclaw skill install openclaw-theme-neon
```

### Files

| File | Role |
|------|------|
| `variables.css` | Default palette + matrix knobs |
| `theme.css` | Components (panels, terminal, buttons, badges) |
| `matrix-rain.js` | Canvas rain (`MatrixRain.init()`) |
| `variants/*.css` | Optional palettes loaded after the defaults |
| `docs/preview.html` | Interactive preview (also on GitHub Pages) |

## Preview

**Live (GitHub Pages):** https://ianalloway.github.io/openclaw-theme-neon/

Includes a variant switcher, matrix-rain toggle, and a CSS variable editor sidebar. The site is published from the `main` branch root so `theme.css`, `matrix-rain.js`, and `variants/` resolve next to `docs/preview.html`.

### Local preview

No build step. From the repo root:

```bash
python -m http.server 8765
# open http://localhost:8765/docs/preview.html
```

Screenshot assets are intentionally not checked in — capture your own from this preview if you need README images ([issue #3](https://github.com/ianalloway/openclaw-theme-neon/issues/3)).

## ASCII vibe check

```text
╔══════════════════════════════════════════╗
║  ▓▒░ OPENCLAW NEON THEME ░▒▓            ║
║                                          ║
║  > How can I help you today?             ║
║  ▌                                       ║
╚══════════════════════════════════════════╝
```

## Customization

Edit `variables.css` (names match what `theme.css` actually consumes):

```css
:root {
  --neon-primary: #00ff41;    /* Matrix green */
  --neon-secondary: #ff0090;  /* Hot pink */
  --neon-accent: #00d4ff;     /* Cyan */
  --neon-bg: #090909;         /* Near-black */
  --neon-surface: rgba(0, 255, 65, 0.04);
  --neon-border: rgba(0, 255, 65, 0.2);
  --neon-glow: 0 0 12px rgba(0, 255, 65, 0.45), 0 0 30px rgba(0, 255, 65, 0.15);
  --neon-font-mono: 'IBM Plex Mono', 'Fira Code', monospace;
  --matrix-density: 0.03;     /* Rain density (0.01–0.1) */
  --matrix-speed: 1.0;        /* Rain speed multiplier */
  --matrix-opacity: 0.18;     /* Canvas opacity */
}
```

In HTML:

```html
<link rel="stylesheet" href="theme.css" />
<canvas class="neon-matrix-rain" id="matrix-rain"></canvas>
<script src="matrix-rain.js"></script>
```

`matrix-rain.js` auto-inits on DOM ready. Call `MatrixRain.destroy()` to tear down, or `MatrixRain.setVariant('neon-blue')` to retint the rain primary.

## Variants

Load a variant **after** `theme.css` so it overrides `:root` tokens:

```html
<link rel="stylesheet" href="theme.css" />
<link rel="stylesheet" href="variants/neon-dracula.css" />
```

| Variant | Primary | Secondary | Vibe | File |
|---------|---------|-----------|------|------|
| `neon` (default) | Matrix green | Hot pink | Classic cyber | `variables.css` |
| `neon-blue` | Cyan | Electric purple | Ocean rig | `variants/neon-blue.css` |
| `neon-amber` | Amber | Teal | Retro terminal | `variants/neon-amber.css` |
| `neon-red` | Crimson | Neon orange | Danger mode | `variants/neon-red.css` |
| `neon-dracula` | Dracula green | Pink | Dracula palette | `variants/neon-dracula.css` |

```yaml
theme: neon-blue   # or neon-amber, neon-red, neon-dracula
```

## Related issues

- [#1](https://github.com/ianalloway/openclaw-theme-neon/issues/1) Dracula variant → shipped as `variants/neon-dracula.css`
- [#2](https://github.com/ianalloway/openclaw-theme-neon/issues/2) Theme preview page → [GitHub Pages preview](https://ianalloway.github.io/openclaw-theme-neon/)
- [#3](https://github.com/ianalloway/openclaw-theme-neon/issues/3) README screenshots → use the preview to capture real shots; no placeholder image files

## Author

[Ian Alloway](https://github.com/ianalloway) — building AI tools with style.

## License

MIT — see [LICENSE](LICENSE).
