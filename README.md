# openclaw-theme-neon

**Neon cyberpunk theme for OpenClaw.** Matrix rain, glowing terminals, dark-glass panels — make your personal AI assistant look like it's running in 2077.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-Compatible-brightgreen?style=for-the-badge)](https://openclaw.ai)

![Theme Preview](docs/preview.png)

## Features

- 🌧️ **Matrix rain** background animation (CSS-only, configurable density)
- 💚 **Neon green** primary accent with hot-pink secondary
- 🪟 **Dark-glass** panel effect with frosted backdrop blur
- ⌨️ **Monospace everything** — IBM Plex Mono throughout
- 🔴 **Glowing borders** with pulse animation on active elements
- 📱 Responsive — works on mobile terminal views
- ♿ Reduced-motion mode respects `prefers-reduced-motion`

## Install

```bash
# Copy theme to OpenClaw themes directory
cp -r . ~/.openclaw/themes/neon/

# Set in your openclaw.config.yaml
theme: neon
```

Or install from ClawHub:

```bash
openclaw skill install openclaw-theme-neon
```

## Preview

```
╔══════════════════════════════════════════╗
║  ▓▒░ OPENCLAW NEON THEME ░▒▓            ║
║                                          ║
║  > How can I help you today?             ║
║  ▌                                       ║
╚══════════════════════════════════════════╝
```

## Customization

Edit `variables.css` to tweak the palette:

```css
:root {
  --neon-primary: #00ff41;    /* Matrix green */
  --neon-secondary: #ff0090;  /* Hot pink */
  --neon-accent: #00d4ff;     /* Cyan */
  --neon-bg: #0a0a0a;         /* Near-black */
  --neon-surface: rgba(0, 255, 65, 0.04);
  --neon-border: rgba(0, 255, 65, 0.2);
  --neon-glow: 0 0 20px rgba(0, 255, 65, 0.4);
  --font-mono: 'IBM Plex Mono', 'Fira Code', monospace;
  --matrix-density: 0.03;     /* Rain density (0.01–0.1) */
  --matrix-speed: 1.0;        /* Rain speed multiplier */
}
```

## Variants

| Variant | Primary | Secondary | Vibe |
|---------|---------|-----------|------|
| `neon` (default) | Matrix green | Hot pink | Classic cyber |
| `neon-blue` | Cyan | Electric purple | Ocean rig |
| `neon-amber` | Amber | Teal | Retro terminal |
| `neon-red` | Crimson | Neon orange | Danger mode |

```bash
theme: neon-blue   # or neon-amber, neon-red
```

## Author

[Ian Alloway](https://github.com/ianalloway) — building AI tools with style.

## License

MIT
