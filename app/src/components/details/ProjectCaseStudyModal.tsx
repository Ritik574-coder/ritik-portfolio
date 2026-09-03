import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Workflow, Layers } from "lucide-react";
import type { Project } from "../../data/portfolio";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-up">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-void-dark border border-white/15 p-6 sm:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.8)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>{project.category} · Case Study</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.title}
        </h2>

        {/* Complexity & Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span>Engineering Complexity:</span>
            <div className="flex items-center text-amber-400">
              {"★".repeat(Math.floor(project.complexity))}
              {project.complexity % 1 !== 0 && "½"}
            </div>
            <span className="text-slate-500">({project.complexity} / 5)</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-medium transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Repository</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Deep Dive Grid */}
        <div className="space-y-6">
          {/* Business Problem */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              The Problem Statement
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              The Engineered Solution
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5" />
              Architecture Highlights & Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.map((layer) => (
                <div key={layer} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-mono">{layer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verification & Achievements
            </h4>
            <div className="space-y-2">
              {project.achievements.map((ach) => (
                <div key={ach} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  <span className="text-xs text-slate-200">{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter / Business Value */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10 border border-cyan-400/20">
            <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
              Recruiter & Hiring Team Takeaway
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {project.recruiterValue}
            </p>
          </div>

          {/* Technology Pills */}
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-void-dark border border-white/15 text-slate-300 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
