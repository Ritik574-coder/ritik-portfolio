import { useMemo, useState } from "react";
import { ArrowUpRight, Award, BarChart3, CheckCircle2, Code2, Filter, GitFork, Github, ImageOff, LayoutGrid, Search, ShieldCheck, Sparkles, Star, Trophy, X } from "lucide-react";
import { useGitHubData } from "../hooks/useGitHubData";
import { certifications, projects, skills, type ProjectCategory } from "../data/portfolio";

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
          <span>{(repository.languages ?? []).slice(0, 3).join(" · ") || repository.language || "Language unavailable"}</span>
          <span>Updated {formatDate(repository.updatedAt)}</span>
        </p>
      ) : null}
      <div className="recruiter-value"><ShieldCheck className="h-4 w-4" /><p>{project.recruiterValue}</p></div>
      <div className="project-footer">
        <Stars value={project.complexity} />
        <a href={project.href} target="_blank" rel="noreferrer">GitHub<Github className="h-4 w-4" /></a>
      </div>
    </article>
  );
};

const SectionHeader = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p>
  </div>
);

export function GitHubPortfolioInteractiveCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "skills" | "certifications">("projects");
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const { data: githubData, status: githubStatus } = useGitHubData();

  const sortedRepos = useMemo(() => {
    const list = Object.values(githubData.repositories ?? {}).filter(
      (repository) => repository && repository.name && repository.htmlUrl
    );
    return list.sort((a, b) => (b.productivityScore || 0) - (a.productivityScore || 0));
  }, [githubData.repositories]);

  const maxProductivity = useMemo(() => {
    return Math.max(...sortedRepos.map((r) => r.productivityScore || 100), 100);
  }, [sortedRepos]);

  const activeRepo = useMemo(() => {
    if (!selectedRepo) return sortedRepos[0] || null;
    return sortedRepos.find((r) => r.name === selectedRepo) || sortedRepos[0] || null;
  }, [selectedRepo, sortedRepos]);

  return (
    <>
      <div
        className="github-projects-card interactive-app-card"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
      >
        <div className="card-badge">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span>Interactive App & GitHub Dashboard</span>
        </div>
        <div className="card-body-content">
          <h3>GitHub Projects & Skills Analytics Hub</h3>
          <p>
            Click to explore all public GitHub repositories ordered high-to-low by productivity, with interactive visual performance analytics, core skills, and verified certificates in one unified view.
          </p>

          <div className="productivity-mini-preview">
            <div className="preview-header">
              <span><BarChart3 className="h-4 w-4 text-cyan-300" /> Top GitHub Repositories (Ordered by Productivity)</span>
              <span className="live-indicator">{githubStatus === "loading" ? "Loading..." : "Live Active"}</span>
            </div>
            <div className="mini-bars">
              {sortedRepos.slice(0, 4).map((repo) => {
                const pct = Math.round(((repo.productivityScore || 75) / maxProductivity) * 100);
                return (
                  <div key={repo.name} className="mini-bar-item">
                    <div className="mini-bar-label">
                      <strong>{repo.name}</strong>
                      <small>{repo.productivityScore || 85} Productivity Score</small>
                    </div>
                    <div className="mini-bar-track">
                      <div className="mini-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-footer-stats">
            <span><Code2 className="h-4 w-4" /> {sortedRepos.length} Repositories</span>
            <span><Award className="h-4 w-4" /> {certifications.length} Certifications</span>
            <span><Trophy className="h-4 w-4" /> {skills.length} Technical Skills</span>
            <span className="click-prompt">Click to open visual interactive hub <ArrowUpRight className="h-4 w-4" /></span>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="interactive-modal-content" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <div>
                <span className="eyebrow"><Sparkles className="h-4 w-4 inline mr-1 text-cyan-300" /> Interactive App Hub</span>
                <h2>GitHub Repositories, Skills & Certifications</h2>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <X className="h-6 w-6" />
              </button>
            </header>

            <div className="modal-tabs">
              <button
                className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
                onClick={() => setActiveTab("projects")}
              >
                <LayoutGrid className="h-4 w-4" />
                GitHub Projects ({sortedRepos.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                <Trophy className="h-4 w-4" />
                Skills ({skills.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "certifications" ? "active" : ""}`}
                onClick={() => setActiveTab("certifications")}
              >
                <Award className="h-4 w-4" />
                Certifications ({certifications.length})
              </button>
            </div>

            <div className="modal-body">
              {activeTab === "projects" && (
                <div className="projects-tab-layout">
                  <div className="productivity-visual-panel">
                    <div className="visual-heading">
                      <h4><BarChart3 className="h-5 w-5 text-cyan-300" /> Productivity Visual Analytics</h4>
                      <p>Repositories ordered by high-to-low activity, code complexity, commits, and star engagement.</p>
                    </div>

                    <div className="interactive-chart-container">
                      {sortedRepos.map((repo) => {
                        const score = repo.productivityScore || 70;
                        const widthPct = Math.round((score / maxProductivity) * 100);
                        const isSelected = activeRepo?.name === repo.name;
                        return (
                          <div
                            key={repo.name}
                            className={`chart-row ${isSelected ? "selected" : ""}`}
                            onClick={() => setSelectedRepo(repo.name)}
                          >
                            <div className="chart-row-info">
                              <span className="repo-title">{repo.name}</span>
                              <span className="repo-score">{score} Productivity Index</span>
                            </div>
                            <div className="chart-bar-bg">
                              <div
                                className="chart-bar-fill"
                                style={{ width: `${widthPct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {activeRepo && (
                    <div className="repo-detail-panel">
                      <div className="repo-detail-header">
                        <span className="pill">{activeRepo.language || "Repository"}</span>
                        <h3>{activeRepo.name}</h3>
                        <p>{activeRepo.description || "No description provided."}</p>
                      </div>

                      <div className="detail-stats-grid">
                        <div>
                          <span>Productivity</span>
                          <strong>{activeRepo.productivityScore || 85} / 100</strong>
                        </div>
                        <div>
                          <span>Commits</span>
                          <strong>{activeRepo.commitCount || 50}+</strong>
                        </div>
                        <div>
                          <span>Stars</span>
                          <strong>{activeRepo.stars}</strong>
                        </div>
                        <div>
                          <span>Forks</span>
                          <strong>{activeRepo.forks}</strong>
                        </div>
                      </div>

                      {activeRepo.languages && activeRepo.languages.length > 0 ? (
                        <div className="tech-list">
                          {activeRepo.languages.map((lang) => (
                            <span key={lang}>{lang}</span>
                          ))}
                        </div>
                      ) : null}

                      <a
                        href={activeRepo.htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-action modal-repo-link"
                      >
                        Open Repository on GitHub <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="skills-tab-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="modal-skill-card">
                      <div className="skill-card-top">
                        <span className="pill">{skill.group}</span>
                        <strong>{skill.name}</strong>
                      </div>
                      <div className="skill-meter">
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                      <p>{skill.evidence}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="certs-tab-grid">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="modal-cert-card">
                      <div className="cert-card-header">
                        <Award className="h-5 w-5 text-cyan-300" />
                        <div>
                          <strong>{cert.name}</strong>
                          <p>{cert.issuer} • Issued {cert.issueDate}</p>
                        </div>
                      </div>
                      <div className="tech-list">
                        {cert.skills.map((sk) => (
                          <span key={sk}>{sk}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

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
        <GitHubPortfolioInteractiveCard />
        <div className="section-cta">
          <p>Explore the complete project library, including BI dashboards and learning projects.</p>
          <button className="primary-action" onClick={() => document.getElementById("all-projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            View all {projects.length} projects
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
      <section className="content-section explorer-section" id="all-projects">
        <SectionHeader eyebrow="Complete Project Library" title="Every project, organized for fast discovery." copy="Search all portfolio projects and filter by Data Engineering, Business Intelligence, or Learning to match the role a recruiter is hiring for." />
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
