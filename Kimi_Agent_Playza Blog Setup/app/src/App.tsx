import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Database,
  Download,
  FileText,
  Github,
  CheckCircle2,
  GitPullRequestArrow,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  TableProperties,
  Users,
  Workflow,
  X,
} from "lucide-react";
import "./index.css";
import useLenis from "./hooks/useLenis";
import { useGitHubData } from "./hooks/useGitHubData";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { CertificationSection } from "./components/CertificationSection";
import { ProjectSections } from "./components/ProjectSection";
import {
  about,
  github,
  profile,
  projects,
  skills,
} from "./data/portfolio";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["All Projects", "all-projects"],
  ["Certifications", "certifications"],
  ["Resume", "resume"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const formatDate = (value?: string) =>
  value ? new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(value)) : "Not available";

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

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { data: githubData } = useGitHubData();
  const liveStats = [
    { label: "Public Repositories", value: String(githubData.profile.publicRepos || "—") },
    { label: "Recent Public Events", value: String(githubData.recentActivity.length || "—") },
    { label: "Projects", value: String(projects.length) },
    { label: "Open Source", value: "Contributor" },
  ];

  useEffect(() => {
    const sections = ["top", ...navItems.map(([, id]) => id)];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <section className="hero-section" id="top">
      <a className="skip-link" href="#about">Skip to portfolio content</a>
      <header className="nav-shell">
        <button className="brand-chip" onClick={() => navigate("top")} aria-label="Back to top">
          <Database className="h-4 w-4" />
          <span>Ritik Kumar</span>
        </button>
        <button className="mobile-nav-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close primary navigation" : "Open primary navigation"}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span>Menu</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? "is-open" : ""} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => navigate(id)} aria-current={activeSection === id ? "page" : undefined}>
              {label}
            </button>
          ))}
        </nav>
      </header>

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
            <a className="primary-action" href={profile.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Profile summary">
          <img src={profile.portrait} alt="Ritik Kumar, Data Engineer" width="840" height="894" loading="eager" />
          <div className="hero-profile-copy">
            <p>{profile.name}</p>
            <h2>{profile.title}</h2>
            <span>{profile.location}</span>
          </div>
        </aside>
      </div>

      <div className="metric-strip">
        {liveStats.map((stat) => (
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
  const { data: githubData } = useGitHubData();
  const cards = [
    ["Professional Summary", about.summary, BriefcaseBusiness],
    ["Career Journey", about.journey, Workflow],
    ["Learning Philosophy", about.philosophy, Sparkles],
    ["Engineering Mindset", about.mindset, Blocks],
    ["Open Source Contributions", `GitHub activity includes ${githubData.profile.publicRepos || "public"} repositories, recent public activity, reusable project documentation, issue/PR templates, GitHub Actions workflows, and community-facing dbt/data warehouse learning assets.`, GitPullRequestArrow],
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
          <img src={profile.portrait} alt="Ritik Kumar, Data Engineer" width="840" height="894" loading="lazy" />
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

function Resume() {
  const { data: githubData } = useGitHubData();
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
          <p className="resume-fallback">
            PDF preview is hidden on small screens.{" "}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">View the resume</a> or download it below.
          </p>
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
            <p>{githubData.profile.publicRepos || "Public"} repositories, recent GitHub activity, GitHub achievements, and multiple documented data systems.</p>
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
  const { data, status } = useGitHubData();
  return (
    <section className="content-section" id="github">
      <SectionHeader
        eyebrow="GitHub Proof"
        title="Repository activity that supports the Data Engineering brand."
        copy="Profile and repository metadata refresh from GitHub when available; safe portfolio fallback data stays visible when it is not."
      />
      <div className="github-layout">
        <article className="github-card">
          <Github className="h-9 w-9 text-cyan-300" />
          <h3>{github.username}</h3>
          <p>{data.profile.publicRepos || github.repositories} public repositories</p>
          {data.profile.bio ? <p>{data.profile.bio}</p> : null}
          <div className="github-stats" aria-label="GitHub profile statistics">
            <span><Users className="h-4 w-4" /> {data.profile.followers} followers</span>
            <span><Users className="h-4 w-4" /> {data.profile.following} following</span>
          </div>
          <p className="data-status" role="status">{status === "loading" ? "Refreshing live GitHub data…" : status === "error" ? "Live data is unavailable; showing portfolio fallback." : "Live GitHub data, cached locally for one hour."}</p>
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
          {data.recentActivity.length ? <div className="activity-list"><strong>Recent public activity</strong>{data.recentActivity.map((activity) => <p key={`${activity.repository}-${activity.createdAt}`}><CheckCircle2 className="h-4 w-4" />{activity.type} · {activity.repository} · {formatDate(activity.createdAt)}</p>)}</div> : null}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "unconfigured">("idle");
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accessKey) {
      setStatus("unconfigured");
      return;
    }
    setStatus("submitting");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload.website) {
      form.reset();
      setStatus("success");
      return;
    }
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, subject: "Portfolio contact request", ...payload }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="content-section contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Available for Data Engineering, Analytics Engineering, SQL Server, dbt, and Data Warehouse roles."
        copy="Use LinkedIn or GitHub, or send a message through the protected form. Messages are never placed in a mailto URL."
      />
      <div className="contact-layout">
        <div className="contact-links">
          <p className="contact-email">
            <Mail className="h-5 w-5" />
            ritik74820 [at] gmail [dot] com
          </p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <label>
            Name
            <input name="name" autoComplete="name" required minLength={2} />
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
            <textarea name="message" rows={5} required minLength={10} />
          </label>
          <button type="submit" disabled={status === "submitting"}>
            <Mail className="h-4 w-4" />
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          {status !== "idle" ? <p className={`form-status ${status}`} role="status">{status === "success" ? "Thanks — your message has been sent." : status === "unconfigured" ? "The contact form needs its Web3Forms key before it can send messages. Please use LinkedIn or GitHub for now." : "Your message could not be sent. Please try again or use LinkedIn."}</p> : null}
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
      <ErrorBoundary fallbackLabel="Navigation and introduction"><Hero /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="About section"><About /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="Skills section"><Skills /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="Projects"><ProjectSections /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="Certifications"><CertificationSection /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="Resume"><Resume /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="GitHub proof"><GitHubSection /></ErrorBoundary>
      <ErrorBoundary fallbackLabel="Contact section"><Contact /></ErrorBoundary>
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
