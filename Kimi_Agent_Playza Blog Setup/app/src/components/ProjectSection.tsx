import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Filter, GitFork, Github, ImageOff, Search, ShieldCheck, Star } from "lucide-react";
import { useGitHubData } from "../hooks/useGitHubData";
import { projects, type ProjectCategory } from "../data/portfolio";

const categories: Array<"All" | ProjectCategory> = ["All", "Data Engineering", "Business Intelligence", "Learning"];

const formatDate = (value?: string) =>
  value ? new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(value)) : "Not available";

const Stars = ({ value }: { value: number }) => (
  <div className="complexity-rating" aria-label={`Complexity ${value} out of 5`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`h-4 w-4 ${index + 1 <= Math.round(value) ? "fill-cyan-300 text-cyan-300" : "text-white/20"}`} />
    ))}
    <span>{value.toFixed(value % 1 ? 1 : 0)}/5</span>
  </div>
);

export const ProjectCard = ({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) => {
  const { data } = useGitHubData();
  const repository = data.repositories[project.repository];
  return (
    <article className={`project-card reveal-card ${compact ? "project-card-compact" : ""}`}>
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
      {project.media?.screenshot ? (
        <figure className="project-visual">
          <img src={project.media.screenshot.src} alt={project.media.screenshot.alt} width="1024" height="576" loading="lazy" />
          <figcaption>Verified project screenshot</figcaption>
        </figure>
      ) : (
        <div className="project-visual-placeholder" role="status">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
          <div><strong>Screenshot pending</strong><span>An owner-provided project capture will appear here.</span></div>
        </div>
      )}
      <div className="project-grid">
        <div><span>Business Problem</span><p>{project.businessProblem}</p></div>
        <div><span>Solution Implemented</span><p>{project.solution}</p></div>
      </div>
      {!compact ? (
        <>
          <div className="architecture-list">
            <span>Architecture</span>
            {project.architecture.map((item) => <p key={item}><CheckCircle2 className="h-4 w-4" />{item}</p>)}
            {project.media?.diagram ? (
              <figure className="project-diagram">
                <img src={project.media.diagram.src} alt={project.media.diagram.alt} width="1024" height="576" loading="lazy" />
                <figcaption>Verified {project.media.diagram.type} diagram</figcaption>
              </figure>
            ) : <p className="diagram-placeholder"><ImageOff className="h-4 w-4" aria-hidden="true" />Architecture diagram not yet published.</p>}
          </div>
          <div className="achievement-list">
            <span>Key Achievements</span>
            <ul>{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
          </div>
        </>
      ) : null}
      <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      {repository ? (
        <p className="repository-meta" aria-label={`${project.repository} repository metadata`}>
          <Star className="h-3.5 w-3.5" aria-hidden="true" /> {repository.stars}
          <GitFork className="h-3.5 w-3.5" aria-hidden="true" /> {repository.forks}
          <span>{repository.languages.slice(0, 3).join(" · ") || repository.language || "Language unavailable"}</span>
          <span>Updated {formatDate(repository.updatedAt)}</span>
        </p>
      ) : null}
      <div className="recruiter-value"><ShieldCheck className="h-4 w-4" /><p>{project.recruiterValue}</p></div>
      <div className="project-footer">
        <Stars value={project.complexity} />
        <a href={project.href} target="_blank" rel="noreferrer">GitHub< Github className="h-4 w-4" /></a>
      </div>
    </article>
  );
};

const SectionHeader = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p>
  </div>
);

export function ProjectSections() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => (category === "All" || project.category === category) &&
      (!normalized || [project.title, project.repository, project.businessProblem, project.solution, ...project.technologies].join(" ").toLowerCase().includes(normalized)));
  }, [category, query]);
  return (
    <>
      <section className="content-section" id="projects">
        <SectionHeader eyebrow="Featured Projects" title="Data warehouses, dbt pipelines, data quality systems, and BI-ready models." copy="Each card is written for recruiters and hiring managers: problem, solution, architecture, technology, outcomes, and role relevance." />
        <div className="featured-grid">{projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
      <section className="content-section explorer-section" id="all-projects">
        <SectionHeader eyebrow="All Projects" title="Searchable project evidence by role relevance." copy="Filter by Data Engineering, Business Intelligence, or Learning to match the role a recruiter is hiring for." />
        <div className="filter-bar">
          <label><Search className="h-4 w-4" aria-hidden="true" /><input aria-label="Search projects" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dbt, SQL Server, Docker, Power BI..." /></label>
          <div className="category-filter" aria-label="Project category filter"><Filter className="h-4 w-4" aria-hidden="true" />{categories.map((item) => <button key={item} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
        </div>
        <div className="compact-project-grid">{filtered.map((project) => <ProjectCard key={project.id} project={project} compact />)}</div>
        {!filtered.length ? <p className="empty-state" role="status">No projects match this search. Try a technology, repository, or another category.</p> : null}
      </section>
    </>
  );
}
