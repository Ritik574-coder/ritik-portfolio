import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  FileText,
  Filter,
  Github,
  GitPullRequestArrow,
  Linkedin,
  Mail,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TableProperties,
  Workflow,
} from "lucide-react";
import "./index.css";
import useLenis from "./hooks/useLenis";
import {
  about,
  certificateUrl,
  certifications,
  github,
  profile,
  projects,
  skills,
  type ProjectCategory,
} from "./data/portfolio";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Resume", "resume"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Data Engineering",
  "Business Intelligence",
  "Learning",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Stars = ({ value }: { value: number }) => (
  <div className="flex items-center gap-1" aria-label={`Complexity ${value} out of 5`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index + 1 <= Math.round(value) ? "fill-cyan-300 text-cyan-300" : "text-white/20"}`}
      />
    ))}
    <span className="ml-2 text-xs text-slate-400">{value.toFixed(value % 1 ? 1 : 0)}/5</span>
  </div>
);

const SectionHeader = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy ? <p className="section-copy">{copy}</p> : null}
  </div>
);

const ProjectCard = ({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) => (
  <article className={`project-card ${compact ? "project-card-compact" : ""}`}>
    <div className="project-card-top">
      <div>
        <span className="pill">{project.category}</span>
        <h3>{project.title}</h3>
        <p className="repo-name">{project.repository}</p>
      </div>
      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </div>

    <div className="project-grid">
      <div>
        <span>Business Problem</span>
        <p>{project.businessProblem}</p>
      </div>
      <div>
        <span>Solution Implemented</span>
        <p>{project.solution}</p>
      </div>
    </div>

    {!compact ? (
      <>
        <div className="architecture-list">
          <span>Architecture</span>
          {project.architecture.map((item) => (
            <p key={item}>
              <CheckCircle2 className="h-4 w-4" />
              {item}
            </p>
          ))}
        </div>
        <div className="achievement-list">
          <span>Key Achievements</span>
          <ul>
            {project.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </>
    ) : null}

    <div className="tech-list">
      {project.technologies.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>

    <div className="recruiter-value">
      <ShieldCheck className="h-4 w-4" />
      <p>{project.recruiterValue}</p>
    </div>

    <div className="project-footer">
      <Stars value={project.complexity} />
      <a href={project.href} target="_blank" rel="noreferrer">
        GitHub
        <Github className="h-4 w-4" />
      </a>
    </div>
  </article>
);

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="nav-shell" aria-label="Primary navigation">
        <button className="brand-chip" onClick={() => scrollTo("top")} aria-label="Back to top">
          <Database className="h-4 w-4" />
          <span>Ritik Kumar</span>
        </button>
        <nav>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="data-grid-bg" />
      <div className="pipeline-visual" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Data Engineer / Data Platform Builder / Analytics Engineering Practitioner</p>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">
            I design SQL Server warehouses, dbt transformation layers, data quality checks, CI/CD pipelines,
            and BI-ready models that hiring teams can inspect through real project evidence.
          </p>
          <div className="hero-actions">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href={profile.discordUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
            <a className="primary-action" href={profile.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Profile summary">
          <img src={profile.portrait} alt="Ritik Kumar, Data Engineer" loading="eager" />
          <div>
            <p>{profile.name}</p>
            <h2>{profile.title}</h2>
            <span>{profile.location}</span>
          </div>
        </aside>
      </div>

      <div className="metric-strip">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const cards = [
    ["Professional Summary", about.summary, BriefcaseBusiness],
    ["Career Journey", about.journey, Workflow],
    ["Learning Philosophy", about.philosophy, Sparkles],
    ["Engineering Mindset", about.mindset, Blocks],
    ["Open Source Contributions", about.openSource, GitPullRequestArrow],
  ];

  return (
    <section className="content-section" id="about">
      <SectionHeader
        eyebrow="About Me"
        title="Focused on data systems, not generic web development."
        copy="The portfolio is intentionally positioned around data engineering roles: SQL Server Data Engineer, dbt Developer, Data Warehouse Engineer, Analytics Engineer, and BI Engineer."
      />
      <div className="about-layout">
        <div className="about-photo">
          <img src={profile.portrait} alt="Ritik Kumar profile portrait" loading="lazy" />
        </div>
        <div className="about-cards">
          {cards.map(([title, copy, Icon]) => {
            const CardIcon = Icon as typeof Database;
            return (
              <article key={title as string}>
                <CardIcon className="h-5 w-5" />
                <div>
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="content-section" id="skills">
      <SectionHeader
        eyebrow="Data Engineering Skills"
        title="Evidence-based skill profile."
        copy="Proficiency is weighted by repository evidence: production-style projects, documented architecture, tests, CI/CD, and BI delivery."
      />
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card">
            <div>
              <span>{skill.group}</span>
              <strong>{skill.name}</strong>
            </div>
            <div className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
              <span style={{ width: `${skill.level}%` }} />
            </div>
            <p>{skill.evidence}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="content-section" id="projects">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Data warehouses, dbt pipelines, data quality systems, and BI-ready models."
        copy="Each card is written for recruiters and hiring managers: problem, solution, architecture, technology, outcomes, and role relevance."
      />
      <div className="featured-grid">
        {projects.filter((project) => project.featured).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const categoryMatch = category === "All" || project.category === category;
      const queryMatch =
        !normalized ||
        [project.title, project.repository, project.businessProblem, project.solution, ...project.technologies]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <section className="content-section explorer-section" id="all-projects">
      <SectionHeader
        eyebrow="All Projects"
        title="Searchable project evidence by role relevance."
        copy="Filter by Data Engineering, Business Intelligence, or Learning to match the role a recruiter is hiring for."
      />
      <div className="filter-bar">
        <label>
          <Search className="h-4 w-4" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dbt, SQL Server, Docker, Power BI..."
          />
        </label>
        <div className="category-filter" aria-label="Project category filter">
          <Filter className="h-4 w-4" />
          {categories.map((item) => (
            <button
              key={item}
              className={item === category ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="compact-project-grid">
        {filtered.map((project) => (
          <ProjectCard key={`${project.title}-${project.category}`} project={project} compact />
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categoriesForCertificates = ["All", ...Array.from(new Set(certifications.map((item) => item.category))).sort()];

  const filtered = certifications.filter((certificate) => {
    const normalized = query.trim().toLowerCase();
    const categoryMatch = category === "All" || certificate.category === category;
    const queryMatch =
      !normalized ||
      [certificate.name, certificate.issuer, certificate.category, ...certificate.skills]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    return categoryMatch && queryMatch;
  });

  return (
    <section className="content-section" id="certifications">
      <SectionHeader
        eyebrow="Certifications"
        title="Data engineering, dbt, SQL, Python, Docker, Linux, Spark, and governance credentials."
        copy="All certificate PDFs from the repository are connected to view and download actions. Credential IDs and verification URLs can be added later where providers expose them."
      />
      <div className="filter-bar">
        <label>
          <Search className="h-4 w-4" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search certificates by skill, issuer, or topic..."
          />
        </label>
        <div className="category-filter certificate-filter" aria-label="Certification category filter">
          {categoriesForCertificates.map((item) => (
            <button
              key={item}
              className={item === category ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="cert-grid">
        {filtered.map((certificate) => {
          const url = certificateUrl(certificate.file);
          return (
            <article key={certificate.file} className="cert-card">
              <div className="cert-icon">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span>{certificate.category}</span>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
                <small>Issued {certificate.issueDate}</small>
              </div>
              <div className="tech-list">
                {certificate.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="cert-actions">
                <a href={url} target="_blank" rel="noreferrer">
                  View PDF
                </a>
                <a href={url} download>
                  Download
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="content-section resume-section" id="resume">
      <SectionHeader
        eyebrow="Resume"
        title="Resume preview and recruiter summary."
        copy="The PDF resume is connected directly from the repository and available for download."
      />
      <div className="resume-layout">
        <div className="resume-preview">
          <iframe src={profile.resumeUrl} title="Ritik Kumar Resume PDF preview" loading="lazy" />
        </div>
        <aside className="resume-panel">
          <FileText className="h-8 w-8 text-cyan-300" />
          <h3>Ritik Kumar</h3>
          <p>Data Engineer focused on SQL Server warehouses, dbt analytics engineering, ETL/ELT, data quality, Docker, GitHub Actions, and BI delivery.</p>
          <div className="resume-points">
            <span>Experience Evidence</span>
            <p>Production-style projects across data warehousing, dbt CI/CD, Medallion Architecture, dimensional modeling, and dashboard delivery.</p>
            <span>Education & Learning</span>
            <p>Certificate-backed learning across SQL, Python, dbt, Docker, Linux, Spark, Airflow, governance, and data engineering foundations.</p>
            <span>Achievements</span>
            <p>13+ public repositories, 480+ commits, GitHub achievements, and multiple documented data systems.</p>
          </div>
          <a className="primary-action" href={profile.resumeUrl} download>
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </aside>
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section className="content-section" id="github">
      <SectionHeader
        eyebrow="GitHub Proof"
        title="Repository activity that supports the Data Engineering brand."
        copy="Static portfolio proof is used so the site remains fast and reliable even if an API request fails."
      />
      <div className="github-layout">
        <article className="github-card">
          <Github className="h-9 w-9 text-cyan-300" />
          <h3>{github.username}</h3>
          <p>{github.repositories} public repositories / {github.commits} commits</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            Open GitHub Profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
        <div className="achievement-grid">
          {github.achievements.map((achievement) => (
            <div key={achievement}>
              <BadgeCheck className="h-5 w-5" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
        <div className="github-highlights">
          {github.highlights.map((highlight) => (
            <p key={highlight}>
              <CheckCircle2 className="h-4 w-4" />
              {highlight}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="content-section contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Available for Data Engineering, Analytics Engineering, SQL Server, dbt, and Data Warehouse roles."
        copy="Use direct links for fastest response. The form opens a prefilled email so it works without a backend service."
      />
      <div className="contact-layout">
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail className="h-5 w-5" />
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a href={profile.discordUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" />
            Discord @{profile.discord}
          </a>
        </div>
        <form
          className="contact-form"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Role / Opportunity
            <input name="role" placeholder="Data Engineer, dbt Developer, SQL Server Data Engineer..." />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">
            <Mail className="h-4 w-4" />
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  useLenis();

  useEffect(() => {
    document.title = "Ritik Kumar | Data Engineer Portfolio";
    const description =
      "Ritik Kumar is a Data Engineer focused on SQL Server data warehousing, dbt analytics engineering, ETL/ELT, data quality, Docker, GitHub Actions, and BI-ready data products.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <ProjectsExplorer />
      <Certifications />
      <Resume />
      <GitHubSection />
      <Contact />
      <footer className="site-footer">
        <div>
          <TableProperties className="h-4 w-4" />
          <span>Ritik Kumar / Data Engineering Portfolio</span>
        </div>
        <button onClick={() => scrollTo("top")}>Back to top</button>
      </footer>
    </main>
  );
}

export default App;
