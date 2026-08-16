import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Mail,
  GraduationCap,
  Code2,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

// --- DATA DEFINITION ---

const SKILLS = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)","HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Express.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma ORM"],
  },
  {
    category: "Tools",
    items: ["JWT", "Passport.js", "bcrypt", "Git", "REST APIs"],
  },
];

const PROJECTS = [
  {
    id: "ringside-scorecard",
    title: "Ringside Scorecard",
    year: "2026",
    swatch: "#E56B5D",
    blurb:
      "A full-stack boxing scorecard app for scoring fights round-by-round on the 10-point must system, structured around real fight cards with main events and undercards rather than standalone bouts.",
    features: [
      "Designed a Postgres schema and REST API scratch, with role-based access so only organizers can create events while any signed-in user can score them.",
      "Implemented auth with short-lived access tokens and rotating refresh tokens in httpOnly cookies, plus separate password reset and change-password flows with hashed, single-use tokens.",
      "Added rate limiting and server-side input validation on every write endpoint, and built a canvas-based export so a finished scorecard can be downloaded or shared as an image.",
      "Built the scoring interface in React, including live round tracking, early-stoppage results (KO/TKO/DQ/NC), and a way to export a finished scorecard as an image to share",
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Passport.js",
    ],
    link: "https://ringsidescore.com",
    repo: "https://github.com/h4m24-a/ringsidescore-frontend",
  },
  {
    id: "messaging-app",
    title: "Real-time Messaging Application",
    year: "2026",
    swatch: "#E7A93B",
    blurb:
      "A responsive full-stack web chat application with relational database structures in PostgreSQL via Prisma, client-side route protection, secure session persistence, and instant UI state synchronization.",
    features: [
      "Architected secure JWT & Passport.js authentication with encrypted password hashing (bcrypt).",
      "Designed PostgreSQL database schemas modeling multi-user conversations, messages, and custom profiles using Prisma ORM.",
      "Implemented TanStack Query for optimistic updates, caching, and seamless server-state management in React.",
    ],
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Passport.js",
      "React",
      "Tailwind CSS",
      "TanStack Query",
    ],
    link: "https://messaging-app-frontend-production.up.railway.app",
    repo: "https://github.com/h4m24-a/messaging-app-frontend",
  },
  {
    id: "blog-api",
    title: "Blog REST API",
    year: "2025",
    swatch: "#D85B6A",
    blurb:
      "A RESTful API for blog platforms, built with Express and Node.js to provide backend logic with strict authentication layers and database query optimization.",
    features: [
      "Role-based access control distinguishing public readers from authenticated article authors.",
      "Complete CRUD service endpoints handling nested comments, draft vs. published states, and author bios.",
      "Strict input validation and sanitized database interaction layers using PostgreSQL and Prisma.",
    ],
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Passport.js",
      "bcrypt",
    ],
    link: null,
    repo: "https://github.com/h4m24-a/blog-api",
  },
  {
    id: "blog-frontend",
    title: "Blog Publisher Frontend & Dashboard",
    year: "2025",
    swatch: "#63B85B",
    blurb:
      "A publishing interface built with Vite and React: a clean reader experience alongside an administrative dashboard for draft authoring, comment moderation, and real-time post publishing.",
    features: [
      "Protected admin routes and custom state management for managing draft posts and editing workflows.",
      "Optimized client-side rendering with TanStack Query to cache requests and prevent layout shifts.",
      "Fully responsive, accessible UI styled using utility-first Tailwind CSS design tokens.",
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "CSS",
    ],
    link: "https://blog-frontend-production-14e1.up.railway.app/",
    repo: "https://github.com/h4m24-a/blog-frontend",
  },
  
];

const EDUCATION = [
  {
    school: "University Centre Leeds",
    credential: "BSc (Hons) Applied Computing",
    period: "2021 — 2022",
  },
  {
    school: "University Centre Leeds",
    credential: "Applied Computing Foundation Degree",
    period: "2019 — 2021",
  },
];

const CONTACT = {
  name: "Hamza Ashraf",
  email: "hamza.ashraf@live.co.uk",
  github: "https://github.com/h4m24-a",
  githubLabel: "github.com/h4m24-a",
};

// --- STYLES ---

const STYLE_SHEET = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

.portfolio-root {
  --bg: #F7F6F2;
  --bg-soft: #FFFFFF;
  --bg-elevated: #F0EEE8;

  --line: #DDD9CF;
  --line-light: #C7C2B6;

  --ink: #171613;
  --ink-dim: #5D594F;
  --ink-faint: #8A857A;

  --amber: #C27A0E;
  --cyan: #087F78;
  --coral: #C94F42;
  --green: #438E3D;
  --purple: #7658B5;

  --font-display: 'Poppins', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'DM Mono', ui-monospace, monospace;

  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);

  transition:
    background-color 220ms ease,
    color 220ms ease;
}

.portfolio-root.theme-dark {
  --bg: #11110F;
  --bg-soft: #171714;
  --bg-elevated: #1D1D19;

  --line: #302F29;
  --line-light: #444239;

  --ink: #F1EEE7;
  --ink-dim: #B8B3A8;
  --ink-faint: #77736A;

  --amber: #E7A93B;
  --cyan: #51B9B0;
  --coral: #E56B5D;
  --green: #63B85B;
  --purple: #9A7BE0;

  background: var(--bg);
}

.portfolio-root *,
.portfolio-root *::before,
.portfolio-root *::after {
  box-sizing: border-box;
}

.portfolio-root a {
  color: inherit;
  text-decoration: none;
}

.pf-serif {
  font-family: var(--font-display);
  letter-spacing: 0;
}

.pf-body {
  font-family: var(--font-body);
  letter-spacing: 0;
}

.pf-mono {
  font-family: var(--font-mono);
  letter-spacing: 0;
}

.pf-title {
  font-family: var(--font-body);
  letter-spacing: 0;
}

.pf-reveal {
  opacity: 0;
  animation: pfRise 650ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes pfRise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pf-project {
  border-radius: 8px;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease;
}

.pf-project:hover {
  border-color: var(--line-light);
  background: var(--bg-elevated);
  transform: translateY(-2px);
}

.pf-project-arrow {
  transition: transform 180ms ease;
}

.pf-project:hover .pf-project-arrow {
  transform: translateX(4px);
}

.pf-contact-link,
.pf-source-link,
.pf-demo-link,
.pf-theme-toggle,
.pf-skill {
  border-radius: 6px;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    border-color 160ms ease;
}

.pf-contact-link:hover {
  background: var(--amber);
  color: #17120A;
  border-color: var(--amber);
}

.pf-source-link:hover {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}

.pf-demo-link:hover {
  filter: brightness(1.08);
}

.pf-theme-toggle:hover {
  border-color: var(--line-light);
  color: var(--ink);
}

.pf-skill:hover {
  color: var(--ink);
  border-color: var(--line-light);
  background: var(--bg-elevated);
}

.portfolio-root .pf-skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 100;
  padding: 0.65rem 0.9rem;
  background: var(--amber);
  color: #17120A;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  border-radius: 6px;
}

.portfolio-root .pf-skip-link:focus {
  top: 1rem;
}

.portfolio-root a:focus-visible,
.portfolio-root button:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 3px;
}

@media (max-width: 1023px) {
  .pf-profile {
    position: static !important;
  }
}

@media (max-width: 640px) {
  .pf-project:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-root,
  .portfolio-root *,
  .portfolio-root *::before,
  .portfolio-root *::after {
    transition: none !important;
  }

  .pf-reveal {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .pf-project:hover {
    transform: none;
  }
}
`;

// --- COMPONENTS ---

function SkillGroup({ group }) {
  return (
    <div className="space-y-3">
      <h3 className="pf-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
        {group.category}
      </h3>

      <ul
        className="flex flex-wrap gap-1.5"
        aria-label={`${group.category} skills`}
      >
        {group.items.map((item) => (
          <li key={item}>
            <span className="pf-skill inline-block border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-2 py-1 text-[11px] text-[color:var(--ink-dim)]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationEntry({ edu }) {
  return (
    <li className="relative pl-4">
      <span
        className="absolute left-0 top-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)]"
        aria-hidden="true"
      />

      <p className="pf-mono text-[10px] text-[color:var(--cyan)]">
        {edu.period}
      </p>

      <p className="pf-body mt-1 text-sm leading-snug text-[color:var(--ink)]">
        {edu.credential}
      </p>

      <p className="pf-mono mt-1 text-[10px] text-[color:var(--ink-faint)]">
        {edu.school}
      </p>
    </li>
  );
}

function ProjectEntry({ project, index }) {
  const hasLiveDemo = Boolean(project.link);
  const headingId = `project-title-${project.id}`;

  return (
    <li className="list-none">
      <article
        aria-labelledby={headingId}
        className="pf-project pf-reveal relative overflow-hidden border border-[color:var(--line)] bg-[color:var(--bg-soft)]"
        style={{
          animationDelay: `${100 + index * 90}ms`,
        }}
      >
        <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[72px_1fr]">
          {/* PROJECT NUMBER */}

          <div className="border-r border-[color:var(--line)] p-4 sm:p-5">
            <span
              className="pf-mono text-[10px]"
              style={{ color: project.swatch }}
            >
              0{index + 1}
            </span>
          </div>

          {/* PROJECT CONTENT */}

          <div className="min-w-0 p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.swatch }}
                    aria-hidden="true"
                  />

                  <span className="pf-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                    Project
                  </span>
                </div>

                <h3
                  id={headingId}
                  className="pf-serif text-3xl leading-none sm:text-4xl"
                  style={{ color: project.swatch }}
                >
                  {project.title}
                </h3>
              </div>

              <span className="pf-mono shrink-0 self-start rounded-md border border-[color:var(--line)] px-2 py-1 text-[10px] text-[color:var(--ink-faint)]">
                {project.year}
              </span>
            </div>

            <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_250px]">
              <div>
                <p className="pf-body max-w-2xl text-sm leading-7 text-[color:var(--ink-dim)]">
                  {project.blurb}
                </p>

                <ul
                  className="mt-6 space-y-3"
                  aria-label={`Key features of ${project.title}`}
                >
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="pf-body flex items-start gap-3 text-sm leading-6 text-[color:var(--ink-dim)]"
                    >
                      <ChevronRight
                        className="pf-project-arrow mt-1 h-3.5 w-3.5 shrink-0"
                        style={{ color: project.swatch }}
                        aria-hidden="true"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[color:var(--line)] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="pf-mono mb-3 text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                  Stack
                </p>

                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span
                        className="pf-mono inline-block rounded-md border px-2 py-1 text-[10px]"
                        style={{
                          borderColor: `${project.swatch}66`,
                          backgroundColor: `${project.swatch}10`,
                          color: project.swatch,
                        }}
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-[color:var(--line)] pt-5">
              {hasLiveDemo && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-demo-link inline-flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-[#17120A] pf-mono"
                  style={{
                    backgroundColor: project.swatch,
                  }}
                >
                  <span>Live demo</span>

                  <ExternalLink
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />

                  <span className="sr-only">
                    {" "}
                    of {project.title} (opens in a new tab)
                  </span>
                </a>
              )}

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="pf-source-link inline-flex items-center gap-2 border border-[color:var(--line-light)] px-3 py-2 text-[11px] font-semibold text-[color:var(--ink)] pf-mono"
              >
                <FolderGit2
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />

                <span>Source</span>

                <span className="sr-only">
                  {" "}
                  code for {project.title} on GitHub (opens in a new tab)
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

// --- APP ---

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div
      className={`portfolio-root pf-body antialiased ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
    >
      <style>{STYLE_SHEET}</style>

      <a href="#main-content" className="pf-skip-link">
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
        {/* TOP BAR */}

        <div className="mb-8 flex items-center justify-end">
          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className="pf-theme-toggle inline-flex items-center gap-2 border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-3 py-2 text-[10px] font-medium text-[color:var(--ink-dim)] pf-mono"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? (
              <>
                <Sun
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          {/* SIDEBAR */}

          <aside
            className="pf-profile pf-reveal space-y-8 lg:sticky lg:top-8"
            aria-label="Profile"
          >
            {/* IDENTITY */}

            <div className="border-b border-[color:var(--line)] pb-8">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--amber)] text-sm font-bold text-[#17120A]">
                  HA
                </div>

                <span className="pf-mono text-[9px] uppercase tracking-[0.15em] text-[color:var(--ink-faint)]">
                  Portfolio / 2026
                </span>
              </div>

              <h1 className="pf-serif text-5xl leading-[0.9] text-[color:var(--ink)] sm:text-6xl lg:text-5xl">
                {CONTACT.name}
              </h1>

              <p className="pf-mono mt-4 text-[11px] leading-5 text-[color:var(--ink-faint)]">
                Full-Stack Web Developer
                <span className="text-[color:var(--amber)]">
                  _
                </span>
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-[color:var(--cyan)]/50 bg-[color:var(--cyan)]/5 px-2.5 py-1.5 text-[10px] font-medium text-[color:var(--cyan)] pf-mono">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)]"
                  aria-hidden="true"
                />

                Available for opportunities
              </div>
            </div>

            {/* CONTACT */}

            <nav
              aria-label="Contact"
              className="border-b border-[color:var(--line)] pb-8"
            >
              <p className="pf-mono mb-3 text-[9px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                Contact
              </p>

              <div className="space-y-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="pf-contact-link flex items-center gap-2 border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-3 py-2.5 text-[10px] text-[color:var(--ink-dim)] pf-mono"
                >
                  <Mail
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />

                  <span className="truncate">
                    {CONTACT.email}
                  </span>
                </a>

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-contact-link flex items-center gap-2 border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-3 py-2.5 text-[10px] text-[color:var(--ink-dim)] pf-mono"
                >
                  <FolderGit2
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{CONTACT.githubLabel}</span>

                  <ExternalLink
                    className="ml-auto h-3 w-3 shrink-0"
                    aria-hidden="true"
                  />

                  <span className="sr-only">
                    {" "}
                    (opens in a new tab)
                  </span>
                </a>
              </div>
            </nav>

            {/* PROFILE */}

            <div className="border-b border-[color:var(--line)] pb-8">
              <p className="pf-mono mb-3 text-[9px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                Profile
              </p>

              <p className="pf-body text-sm leading-6 text-[color:var(--ink-dim)]">
                Full-stack developer, specializing in Node.js /
                Express / PostgreSQL with React and Tailwind CSS
                on the front end.
              </p>
            </div>

            {/* SKILLS */}

            <div>
              <h2 className="pf-title mb-5 flex items-center gap-2 text-base font-semibold">
                <Code2
                  className="h-4 w-4 text-[color:var(--amber)]"
                  aria-hidden="true"
                />

                Skills
              </h2>

              <div className="space-y-5">
                {SKILLS.map((group) => (
                  <SkillGroup
                    key={group.category}
                    group={group}
                  />
                ))}
              </div>
            </div>

            {/* EDUCATION */}

            <div className="border-t border-[color:var(--line)] pt-8">
              <h2 className="pf-title mb-5 flex items-center gap-2 text-base font-semibold">
                <GraduationCap
                  className="h-4 w-4 text-[color:var(--cyan)]"
                  aria-hidden="true"
                />

                Education
              </h2>

              <ul className="space-y-5">
                {EDUCATION.map((edu) => (
                  <EducationEntry
                    key={edu.credential}
                    edu={edu}
                  />
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN */}

          <main
            id="main-content"
            tabIndex={-1}
            className="min-w-0"
          >
            {/* HEADER */}

            <header
              className="pf-reveal mb-7 border-b border-[color:var(--line)] pb-7"
              style={{ animationDelay: "60ms" }}
            >
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-8 bg-[color:var(--amber)]" />

                    <span className="pf-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">
                      Selected work
                    </span>
                  </div>

                  <h2
                    id="projects-heading"
                    className="pf-serif text-5xl leading-none text-[color:var(--ink)] sm:text-6xl"
                  >
                    Featured Projects
                  </h2>
                </div>

                <span className="pf-mono rounded-md border border-[color:var(--line)] px-2.5 py-1.5 text-[10px] text-[color:var(--ink-faint)]">
                  {PROJECTS.length} projects
                </span>
              </div>
            </header>

            {/* PROJECT FEED */}

            <ul
              aria-labelledby="projects-heading"
              className="space-y-4"
            >
              {PROJECTS.map((project, index) => (
                <ProjectEntry
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </ul>
          </main>
        </div>
      </div>

      {/* FOOTER */}

      <footer className="mt-16 border-t border-[color:var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="pf-mono text-[10px] text-[color:var(--ink-faint)]">
            {CONTACT.name}
          </p>

          <nav
            aria-label="Footer contact"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-[10px] text-[color:var(--ink-faint)] transition-colors hover:text-[color:var(--amber)] pf-mono"
            >
              <Mail
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              {CONTACT.email}
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[10px] text-[color:var(--ink-faint)] transition-colors hover:text-[color:var(--amber)] pf-mono"
            >
              <FolderGit2
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              {CONTACT.githubLabel}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}