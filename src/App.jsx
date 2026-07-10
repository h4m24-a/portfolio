import { useState } from "react";

const IconExternal = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const IconGithub = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const IconMail = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const IconCap = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 10-10-5L2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
  </svg>
);

// ---------------------------------------------------------------------------
// `swatch` is just a color used for the hover accent bar + index tint —
// `features` is a short bullet list of what the project actually does.
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    title: "Messaging App",
    year: "2026",
    swatch: "#aec997",
    blurb:
      "A messaging application built with Node.js, Express.js, React and Tailwind CSS, designed to provide a responsive, and user-friendly experience.",
    features: [
      "Built a full-stack messaging application with secure authentication and authorization using JWT, Passport.js, and bcrypt.",

      "RESTful API endpoints with Express.js to support private messaging and user account management.",

      "Relational PostgreSQL database using Prisma ORM to model users, profiles, conversations, and messages.",

      "Responsive single-page application with React, Tailwind CSS, React Router, and TanStack Query for client-side routing and server-state management.",

      "Customisable user profiles, allowing users to update profile image and biography.",
          ],
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Passport.js", "bcrypt", "React", "Vite", "Tailwind", "CSS", "Tanstack query", "React Router"],
    link: "https://messaging-app-frontend-production.up.railway.app",
    repo: "https://github.com/h4m24-a/messaging-app-frontend",
  },
  {
    title: "Blog API",
    year: "2025",
    swatch: "#EA5457",
    blurb:
      "A RESTful API for a blog platform, supporting authenticated authors. Built with Node.js, Express, and PostgreSQL using Prisma ORM. This API enables blog post management, user authentication, and comment handling.",
    features: [
      "Author authentication with JWT & Passport.js",
      "Full CRUD for posts and comments",
      "Role-based access for draft vs published posts",
      "PostgreSQL schema managed with Prisma",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Passport.js", "bcrypt"],
    link: "#",
    repo: "https://github.com/h4m24-a/blog-api",
  },
  {
    title: "Blog Frontend",
    year: "2025",
    swatch: "#80a2d9",
    blurb:
      "Frontend for Blog API built using Vite, React, Tailwind CSS & CSS where users can view and interact with posts. Admin users can manage blog posts with a custom dashboard",
    features: [
      "Public post feed with search and pagination",
      "Admin dashboard for creating and editing posts",
      "Data fetching and caching with TanStack Query",
      "Responsive layout styled with Tailwind CSS",
    ],
    tags: ["React", "Vite", "Tailwind", "CSS", "Tanstack query", "React Router"],
    link: "https://blog-frontend-production-14e1.up.railway.app/",
    repo: "https://github.com/h4m24-a/blog-frontend",
  },
  {
    title: "Where's Waldo",
    year: "2025",
    swatch: "#d9b67e",
    blurb:
      "Wheres-Waldo is a full-stack hidden-object game built with React, Node.js, Express, and PostgreSQL, featuring dynamic levels, coordinate-based character detection, game tracking, and leaderboards.",
    features: [

      "Coordinate-based image tagging with normalized click detection to ensure accurate character selection across different screen sizes.",

      "Backend validation logic to verify user selections and provide instant feedback without exposing character coordinates to the client.",

      "PostgreSQL database with Prisma ORM to store character locations, game sessions, and leaderboard data.",

      "Implemented server-side game timing and leaderboard functionality to securely record completion times and prevent client-side score manipulation.",

          ],
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Vite", "Tailwind", "CSS", "Tanstack query", "React Router"],
    link: "https://wheres-waldo-frontend-production-6b16.up.railway.app",
    repo: "https://github.com/h4m24-a/wheres-waldo-frontend",
  },
  {
    title: "Ecommerce Shopping Cart",
    year: "2024",
    swatch: "#c274d6",
    blurb:
      "An E-commerce site focusing more on building a functional shopping cart using React & Tailwind.",
      features: [
      "A streetwear clothing ecommerce website built using React and Tailwind",

      "Designed and developed the UI in Tailwind CSS",

      "Users can select items, size, add items to cart and view price when adding or removing quantity",
    ],
    tags: ["React", "Vite", "Tailwind", "CSS",],
    link: "https://h4m24-a-ecommerce.netlify.app/",
    repo: "https://github.com/h4m24-a/ecommerce-shopping-cart",
  },
];

// ---------------------------------------------------------------------------
// education
// ---------------------------------------------------------------------------
const EDUCATION = [
  {
    school: "University Centre Leeds ",
    credential: "Bachelor of Science (Hons) in Applied Computing",
    period: "Sept 2021 — June 2022",
  },
  {
    school: "University Centre Leeds ",
    credential: "Applied Computing Foundation Degree",
    period: "Sept 2019 — June 2021",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gray-900  text-[#f3ece1] flex justify-center px-4 py-10 sm:py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Space+Mono:wght@400;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#3a332c] pb-5 mb-10">
          <span className="font-mono text-xs tracking-[0.25em] text-[#a99c8c] uppercase">
            Portfolio / Index
          </span>
          <span className="font-mono text-xs tracking-[0.25em] text-[#a99c8c] uppercase">
            Hamza Ashraf
            {/* Name */}
          </span>
        </header>

        {/* name + role */}
        <div className="mb-14">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Web Developer,
            <br />
          </h1>
          <p className="font-mono text-sm text-[#a99c8c] mt-4 max-w-md">
            Select a project below to expand it.
          </p>
        </div>

        {/* Project index */}
        <div className="border-t border-[#3a332c]">
          {PROJECTS.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={project.title} className="border-b  border-[#3a332c]">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 sm:gap-6 py-5 text-left group focus:outline-none"
                >
                  <span
                    className="font-mono text-xs w-6 shrink-0 transition-colors"
                    style={{ color: isOpen ? project.swatch : "#5c5248" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full shrink-0 transition-transform"
                    style={{
                      backgroundColor: project.swatch,
                      transform: isOpen ? "scale(1)" : "scale(0)",
                    }}
                  />
                  <span className="font-display text-xl  sm:text-2xl font-semibold flex-1 group-hover:text-[#e0a458] transition-colors">
                    {project.title}
                  </span>
                  <span className="font-mono text-xs text-[#a99c8c] shrink-0 hidden sm:inline">
                    {project.year}
                  </span>
                  <span
                    className="font-mono text-lg text-[#a99c8c] shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-auto lg:overflow-hidden  transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "520px" : "0px" }}
                >
                  <div className="pb-6 h-fit max-h-fit pl-10 sm:pl-12 pr-6 sm:pr-10">
                    <p className="text-[#d8cfc2] leading-relaxed mb-4 max-w-xl">{project.blurb}</p>

                    {project.features && project.features.length > 0 && (
                      <ul className="mb-5 space-y-1.5 max-w-xl">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="font-mono text-sm text-[#d8cfc2] pl-4 relative"
                          >
                            <span
                              className="absolute left-0"
                              style={{ color: project.swatch }}
                            >
                              —
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex  flex-col  font-mono text-xs px-2.5 py-1 rounded-full border border-[#3a332c] text-[#a99c8c]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1.5 font-mono text-sm text-[#f3ece1] hover:text-[#e0a458] transition-colors"
                      >
                        <IconExternal size={14} /> Live
                      </a>
                      <a
                        href={project.repo}
                        className="inline-flex items-center gap-1.5 font-mono text-sm text-[#f3ece1] hover:text-[#e0a458] transition-colors"
                      >
                        <IconGithub size={14} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <IconCap size={16} className="text-[#e0a458]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#a99c8c] uppercase">
              Education
            </span>
          </div>

          <div className="border-t border-[#3a332c]">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="border-b border-[#3a332c] py-5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
              >
                <span className="font-mono text-xs text-[#a99c8c] shrink-0 sm:w-28 sm:pt-1">
                  {edu.period}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold">
                    {edu.credential}
                  </h3>
                  <p className="font-mono text-xs text-[#e0a458] mt-1">{edu.school}</p>
                  {edu.detail && (
                    <p className="text-[#d8cfc2] leading-relaxed max-w-xl mt-2">{edu.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / contact */}
        <footer className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#a99c8c]">
            © {new Date().getFullYear()} Hamza Ashraf
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:hamza.ashraf@live.co.uk"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#a99c8c] hover:text-[#e0a458] transition-colors"
            >
              <IconMail size={13} /> hamza.ashraf@live.co.uk
            </a>
            <a
              href="github.com/h4m24-a"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#a99c8c] hover:text-[#e0a458] transition-colors"
            >
              <IconGithub size={13} /> github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}