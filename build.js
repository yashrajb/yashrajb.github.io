#!/usr/bin/env node
/*
  Zero-dependency static site builder.   Run:  node build.js
  Reads config.js + src/ templates, writes the finished site to dist/.
  No npm install needed (Node 16.7+).
*/
const fs = require("fs");
const path = require("path");
const SITE = require("./config.js");

const SRC = path.join(__dirname, "src");
const PUBLIC = path.join(__dirname, "public");
const OUT = path.join(__dirname, "dist");

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const read = (f) => fs.readFileSync(path.join(SRC, f), "utf8");
const fill = (tpl, vars) => tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => {
  if (!(k in vars)) throw new Error("Template value missing: " + k);
  return vars[k];
});
const write = (rel, data) => {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
};
const list = (items, fn) => (items || []).map(fn).join("");
const has = (x) => x && x.items && x.items.length;
const isExternal = (h) => /^https?:/.test(h);
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

/* Links are written relative ("./css/base.css", "../../index.html") so the built
   site opens straight from disk and also works on any host. ctx = current page. */
let ctx = { root: "./", isHome: true };
const url = (h) => {
  if (/^(https?:|mailto:|tel:|\/\/)/.test(h)) return h;
  if (h.startsWith("#")) h = "/" + h; // "#contact" -> "/#contact"
  if (!h.startsWith("/")) return h;
  const [pth, frag] = h.split("#");
  const hash = frag ? "#" + frag : "";
  if (pth === "/" && ctx.isHome && hash) return hash; // same-page anchor
  const file = pth.endsWith("/") ? pth + "index.html" : pth;
  return ctx.root + file.slice(1) + hash;
};
const a = (l, cls) => {

  const target = l?.target

  return `<a ${target?` target=${target}  `: ''} href="${esc(url(l.href))}"${cls ? ` class="${cls}"` : ""}${l.download ? ` download="${esc(l.download)}"` : ""}${isExternal(l.href) ? ' rel="noopener"' : ""}>${esc(l.label)}</a>`;

}
  
const section = (id, title, body) =>
  `<section id="${id}" aria-labelledby="${id}-h"><h2 id="${id}-h">${esc(title)}</h2>${body}</section>`;

/* ---------- one page shell; same header/footer on every page ---------- */
const page = (p) => {
  ctx = { isHome: p.path === "/", root: p.path === "/" ? "./" : "../".repeat(p.path.split("/").filter(Boolean).length) };
  const header = fill(read("header.html"), {
    home: esc(url("/")),
    brand: esc(SITE.name),
    nav: list(SITE.nav, (l) => a(l)),
    resumeHref: esc(url(SITE.resume.href)),
    resumeFile: esc(SITE.resume.file),
  });
  const footer = fill(read("footer.html"), {
    socials: list(SITE.socials, (l) => `<li>${a(l).replace('rel="noopener"', 'rel="me noopener"')}</li>`),
    year: new Date().getFullYear(),
    owner: esc(SITE.name),
  });
  return fill(read("layout.html"), {
    root: ctx.root,
    title: esc(p.title),
    description: esc(p.description),
    canonical: esc(SITE.url + p.path),
    ogType: p.ogType,
    ogImage: esc(SITE.url + SITE.seo.ogImage),
    siteName: esc(SITE.name),
    jsonld: json(p.jsonld),
    header,
    footer,
    content: p.content(), // built after ctx is set so its links are relative too
  });
};

/* ---------- home page ---------- */
function homeContent() {
  const hero = `<div class="hero">
  ${SITE.hero.title}
  ${SITE?.hero?.lede?`<p class="lede">${esc(SITE.hero.lede)}</p>`:""}
  <div class="cta">${list(
    SITE.hero.buttons, (b) => a(b, "btn" + (b.ghost ? " ghost" : ""))
  )}</div></div>`;

  const services = has(SITE.services) && section("services", SITE.services.title,
    `<div class="services">${list(SITE.services.items, (s) => `<article><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`)}</div>`);

  const experience = has(SITE.experience) && section("experience", SITE.experience.title,
    list(SITE.experience.items, (j) =>
      `<div class="job"><time>${esc(j.period)}</time><div><h3>${esc(j.role)}, ${esc(j.company)}</h3>${j.text ? `<p>${esc(j.text)}</p>` : ""}</div></div>`));

  const certifications = has(SITE.certifications) && section("certifications", SITE.certifications.title,
    list(SITE.certifications.items, (c) =>
      `<article class="cert"><h3>${esc(c.name)}</h3><p>${esc(c.description)}</p><div class="links">${a({ label: "Verify credential", href: c.link, target:'_blank' })}</div></article>`) +
    (SITE.certifications.credly ? `<p class="section-link">${a(SITE.certifications.credly)}</p>` : ""));

  const projects = has(SITE.projects) && section("projects", SITE.projects.title,
    list(SITE.projects.items, (p) => {
      const links = [...(p.links || [])];
      if (p.caseStudy) links.push({ label: "Read case study", href: `/case-study/${p.caseStudy}/` });
      return `<article class="project"><h3>${esc(p.title)}</h3>${p.tags ? `<div class="tags">${esc(p.tags)}</div>` : ""}<p>${esc(p.text)}</p>${links.length ? `<div class="links">${list(links, (l) => a(l))}</div>` : ""}</article>`;
    }));

  const testimonials = has(SITE.testimonials) && section("testimonials", SITE.testimonials.title,
    list(SITE.testimonials.items, (t) => `<blockquote><p>${esc(t.quote)}</p><footer>${esc(t.author)}</footer></blockquote>`));

  const about = SITE.about && SITE.about.paragraphs && section("about", SITE.about.title,
    list(SITE.about.paragraphs, (t) => `<p>${esc(t)}</p>`));

  const contact = section("contact", SITE.contact.title,
    `<p>${esc(SITE.contact.text)}</p><div class="cta">${a({ label: SITE.email, href: "mailto:" + SITE.email }, "btn")}${a({ label: "Download resume", href: SITE.resume.href, download: SITE.resume.file }, "btn ghost")}</div>`);

  return [hero, services, experience, certifications, projects, testimonials, about, contact].filter(Boolean).join("\n");
}

const person = {
  "@type": "Person", "@id": SITE.url + "/#person", name: SITE.name, url: SITE.url + "/",
  jobTitle: SITE.jobTitle, email: "mailto:" + SITE.email, knowsAbout: SITE.seo.keywords,
  sameAs: SITE.socials.map((l) => l.href),
  hasCredential: ((SITE.certifications && SITE.certifications.items) || []).map((c) => ({
    "@type": "EducationalOccupationalCredential", name: c.name, description: c.description, url: c.link,
  })),
};
const service = {
  "@type": "ProfessionalService", name: SITE.name + ": Web Development", url: SITE.url + "/",
  founder: { "@id": SITE.url + "/#person" }, areaServed: "Worldwide",
  serviceType: ((SITE.services && SITE.services.items) || []).map((s) => s.title),
};

/* ---------- build ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(SRC, "css"), path.join(OUT, "css"), { recursive: true });
fs.cpSync(path.join(SRC, "js"), path.join(OUT, "js"), { recursive: true });
if (fs.existsSync(PUBLIC)) fs.cpSync(PUBLIC, OUT, { recursive: true });

const urls = ["/"];
write("index.html", page({
  title: SITE.seo.title, description: SITE.seo.description, path: "/", ogType: "website",
  jsonld: { "@context": "https://schema.org", "@graph": [person, service] },
  content: homeContent,
}));

for (const cs of SITE.caseStudies || []) {
  const p = `/case-study/${cs.slug}/`;
  urls.push(p);
  const body = list(cs.sections, (s) =>
    (s.heading ? `<h2>${esc(s.heading)}</h2>`: '') +
    (s.text ? `<p>${esc(s.text)}</p>` : "") +
    (s.imageURL ? `<img src="../../images/${cs.slug}/${s.imageURL}" ${ s.alt ? `alt=${s.alt}` : '' } loading="lazy" />`: "") +
    (s.bullets ? `<ul>${list(s.bullets, (b) => `<li>${esc(b)}</li>`)}</ul>` : ""));
  const quote = cs.quote ? `<blockquote><p>${esc(cs.quote.text)}</p><footer>${esc(cs.quote.author)}</footer></blockquote>` : "";
  write(`case-study/${cs.slug}/index.html`, page({
    title: `${cs.title} | ${SITE.name}`, description: cs.description, path: p, ogType: "article",
    jsonld: { "@context": "https://schema.org", "@type": "Article", headline: cs.title,
      author: { "@id": SITE.url + "/#person", "@type": "Person", name: SITE.name, url: SITE.url + "/" },
      mainEntityOfPage: SITE.url + p },
    content: () => `<article class="page">
                  <p class="meta">
                    <a href="${esc(url("/#work"))}">&larr; Back to work</a>
                  </p>
                  <h1>
                    ${esc(cs.title)}
                  </h1>
                  <p class="meta">
                    ${esc(cs.stack)}
                  </p>
                  ${body}
                  ${quote}
                  <h3 class='case-study-footer'>Got a project in mind or just want to chat? I’m here to help turn your vision into reality.
                  <a href="/#contact">Let’s connect</a> and create something impactful!</h3>
            </article>`,
  }));
  
}

const today = new Date().toISOString().slice(0, 10);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`Built ${urls.length} page(s) into dist/`);
