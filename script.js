const publications = [
  {
    title: "DualityCert: Verifier-Gated Language-Model Repair of Broken Duality Claims in Quantum Field Theory",
    authors: "Xingyang Yu",
    year: "2026",
    venue: "arXiv preprint",
    arxiv: "https://arxiv.org/abs/2607.23614",
    tags: ["AI for science", "QFT", "Seiberg duality", "verifier", "LLM repair"]
  },
  {
    title: "Grading the Unspoken: Evaluating Tacit Reasoning in Quantum Field Theory and String Theory with LLMs",
    authors: "Xingyang Yu, Yinghuan Zhang, Yufei Zhang, Zijun Cui",
    year: "2026",
    venue: "arXiv preprint",
    arxiv: "https://arxiv.org/abs/2604.14188",
    tags: ["AI for science", "QFT", "string theory", "LLM evaluation", "tacit reasoning"]
  },
  {
    title: "Gauging in Parameter Space: A Top-Down Perspective",
    authors: "Xingyang Yu",
    year: "2025",
    venue: "Physical Review D 112, 025020; Editor's Suggestion",
    arxiv: "https://arxiv.org/abs/2411.14997",
    tags: ["QFT", "string theory", "generalized symmetries", "parameter space", "Editor's Suggestion"]
  },
  {
    title: "Notes on Gauging Noninvertible Symmetries. Part I. Multiplicity-Free Cases",
    authors: "Alonso Perez-Lona, Daniel Robbins, Eric Sharpe, Thomas Vandermeulen, Xingyang Yu",
    year: "2024",
    venue: "Journal of High Energy Physics 2024, 154",
    arxiv: "https://arxiv.org/abs/2311.16230",
    tags: ["non-invertible symmetries", "gauging", "fusion categories", "2D QFT"]
  },
  {
    title: "Top Down Approach to Topological Duality Defects",
    authors: "Jonathan J. Heckman, Max Hübner, Ethan Torres, Xingyang Yu, Hao Y. Zhang",
    year: "2023",
    venue: "Physical Review D 108, 046015",
    arxiv: "https://arxiv.org/abs/2212.09743",
    tags: ["duality defects", "non-invertible symmetries", "brane engineering", "generalized symmetries"]
  },
  {
    title: "SymTrees and Multi-Sector QFTs",
    authors: "Florent Baume, Jonathan J. Heckman, Max Hübner, Ethan Torres, Andrew P. Turner, Xingyang Yu",
    year: "2024",
    venue: "Physical Review D 109, 106013",
    arxiv: "https://arxiv.org/abs/2310.12980",
    tags: ["SymTFT", "multi-sector QFTs", "generalized symmetries", "string theory"]
  },
  {
    title: "Intermediate Defect Groups, Polarization Pairs, and Non-Invertible Duality Defects",
    authors: "Craig Lawrie, Xingyang Yu, Hao Y. Zhang",
    year: "2024",
    venue: "Physical Review D 109, 026005",
    arxiv: "https://arxiv.org/abs/2306.11783",
    tags: ["defect groups", "duality defects", "non-invertible symmetries", "SymTFT"]
  },
  {
    title: "Non-Invertible Symmetries in 2D from Type IIB String Theory",
    authors: "Xingyang Yu",
    year: "2024",
    venue: "Physical Review D 110, 065008",
    arxiv: "https://arxiv.org/abs/2310.15339",
    tags: ["non-invertible symmetries", "string theory", "SymTFT", "top-down construction"]
  }
];

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const publicationList = document.querySelector("#publication-list");
const year = document.querySelector("#year");

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "☼" : "◐";
  }
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderPublications() {
  if (!publicationList) {
    return;
  }

  publicationList.innerHTML = publications
    .map((publication) => {
      const tags = publication.tags
        .map((tag) => `<li>${tag}</li>`)
        .join("");

      return `
        <article class="publication-card">
          <h3>${publication.title}</h3>
          <p class="publication-authors">${publication.authors}</p>
          <p class="publication-venue">${publication.year}. ${publication.venue}.</p>
          <ul class="tag-list" aria-label="Publication topics">
            ${tags}
          </ul>
          <div class="publication-actions">
            <a href="${publication.arxiv}" rel="noopener" target="_blank">arXiv</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  navLinks?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

setTheme(getInitialTheme());
renderPublications();

if (year) {
  year.textContent = String(new Date().getFullYear());
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMobileNav();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNav();
  }
});
