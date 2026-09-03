import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects, type Project } from "../../data/portfolio";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";

interface ProjectsDetailViewProps {
  onBack: () => void;
}

export function ProjectsDetailView({ onBack }: ProjectsDetailViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories = [
    "All",
    "Data Engineering",
    "AI & ML Engineering",
    "Data Platform",
    "Business Intelligence",
    "Learning",
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query)) ||
        p.solution.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <motion.div
      layoutId="card-container-projects"
      className="fixed inset-0 z-50 overflow-y-auto bg-void-black/95 backdrop-blur-3xl text-slate-100 flex flex-col"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-20 px-4 sm:px-8 py-4 bg-void-dark/85 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 transition-all"
          data-cursor="pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO HUB</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">PROJECTS GALLERY</span>
          <span className="text-cyan-400 font-bold">({filteredProjects.length})</span>
        </div>
      </header>

      {/* Main Detail Content Container */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        {/* Category Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Production Architecture & Engineering</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered Systems & BI Products
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Detailed breakdown of data warehouses, dbt Core transformations, Medallion pipelines, and decision-ready dashboards.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,245,255,0.25)]"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or keyword..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl bg-void-dark/80 border border-white/10 hover:border-cyan-400/40 p-5 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header Tag & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-[10px]">
                    {p.category}
                  </span>
                  <div className="flex items-center text-amber-400 text-xs">
                    {"★".repeat(Math.floor(p.complexity))}
                    {p.complexity % 1 !== 0 && "½"}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {p.solution}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{p.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveCaseStudy(p)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-medium transition-all"
                  data-cursor="pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white text-xs font-mono transition-colors"
                  data-cursor="pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </motion.div>
  );
}
