# Studio Freight Nuxt 4 Boilerplate

## Features

- ⚡️ [Nuxt 4](https://nuxt.com/) minimal setup
- 🎨 [Lenis](https://lenis.darkroom.engineering/) smooth scrolling integration
- ⏱ [Tempus](https://github.com/darkroomengineering/tempus) for performant requestAnimationFrame handling
- 📝 [Storyblok](https://www.storyblok.com/) headless CMS integration (optional)
- 🔧 Preconfigured project structure for rapid development
- 🚀 Ready for production build & deployment

Look at the [Nuxt documentation](https://nuxt.com/docs/4.x/getting-started/introduction) to learn more.

## ⚙️ App Configuration

This boilerplate includes a centralized [`app.config.ts`](./app.config.ts) file at the root of the project.  
You can use it to **control global app behavior** without editing multiple files.

### Available Options

- **General**

  - `title`: Project title
  - `ssr`: Enable/disable server-side rendering
  - `link.prefetch`: Configure Nuxt’s link prefetching strategy (`visibility` by default)

- **Storyblok (Headless CMS)**

  - `enabled`: Toggle Storyblok integration
  - `settings`: Load global settings before mount
  - `forceDraft`: Always load draft content
  - `apiOptions.region`: Configure API region (`us`, `eu`, …)

- **Three.js Integration**

  - `enabled`: Toggle WebGL renderer
  - `options`: Control renderer options (`alpha`, `antialias`, `stencil`, `depth`, `powerPreference`, …)

- **Fonts**

  - `defaults.weights`: Set available font weights
  - `families`: Configure font families and providers (Google, local, etc.)
  - `assets.prefix`: Optional asset prefix for font files

- **Design System**
  - `colors`: Base colors with automatically generated shades
  - `themes`: Predefined `light` and `dark` themes
  - `breakpoints`: Responsive layout breakpoints
  - `grid`: Grid system (`columns`, `gap`, `margin`)
  - `spacers`: Global spacing scale

✅ This makes it easy to **toggle CMS, rendering, fonts, theming, and layouts** from one place.  
You can extend this file to add your own global config values.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# yarn
yarn install
```
