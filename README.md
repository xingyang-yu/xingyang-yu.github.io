# Xingyang Yu Personal Website

This is a plain static academic personal website for GitHub Pages. It uses only HTML, CSS, and JavaScript, with MathJax loaded from a CDN for mathematical notation.

The production domain is:

```text
https://xingyangyu.com
```

## Preview Locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The site also works by opening `index.html` directly in a browser.

## Deploy on GitHub Pages

1. Create a GitHub repository for the site.
2. Add `index.html`, `styles.css`, `script.js`, and `README.md` to the repository.
3. Push the files to GitHub.
4. In the repository settings, go to **Pages**.
5. Set the source to the main branch and root directory.
6. Save the settings and wait for GitHub Pages to publish the site.

For a user or organization page, the repository is usually named:

```text
username.github.io
```

## Editing Content

- Edit profile links and contact links, including LinkedIn, in `index.html`.
- Edit selected publications in the `publications` array inside `script.js`.
- Edit appointments and project descriptions in `index.html`.
- Replace the disabled "CV coming soon" placeholder with a real CV link once a PDF is ready.
- Edit the custom domain in `CNAME`, `robots.txt`, `sitemap.xml`, and the canonical metadata in `index.html` if the domain changes.

## Notes

- The light/dark mode preference is saved with `localStorage`.
- No fake CV file is included.
- The publication list is data-driven from JavaScript so the page still works when opened directly as a local file.
