# Site

1. Edit `config.js` (content) or `src/` (layout, header, footer, css, js).
2. Run `node build.js`  (no npm install needed, Node 16.7+).
3. Upload the `dist/` folder.

Put `resume.pdf` and `og-image.png` (1200x630) in `public/`. Everything in `public/` is copied to the site root.

Netlify / Cloudflare Pages: build command `node build.js`, publish directory `dist`.
