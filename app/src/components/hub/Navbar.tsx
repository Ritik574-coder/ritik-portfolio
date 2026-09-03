import { useState } from "react";
import { Database, Download, Layers, Award, Cpu, Menu, X } from "lucide-react";
import { profile } from "../../data/portfolio";

interface NavbarProps {
  onOpenCategory: (category: "projects" | "certificates" | "skills") => void;
  activeCategory: string | null;
}

export function Navbar({ onOpenCategory, activeCategory }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Chip */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="pointer-events-auto cursor-pointer group flex items-center gap-3 px-3.5 py-2 rounded-full bg-void-dark/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-200"
          data-cursor="pointer"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(0,245,255,0.4)] transition-all duration-200">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-xs text-white tracking-wider">RITIK KUMAR</span>
            <span className="font-mono text-[9px] text-cyan-400 tracking-tight">DATA PLATFORM</span>
          </div>
        </div>

        {/* Center Categories Navigation Pill (Desktop) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-void-dark/75 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => onOpenCategory("projects")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeCategory === "projects"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.25)]"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
            data-cursor="pointer"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Projects</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-cyan-300 border border-white/10">
              11
            </span>
          </button>

          <button
            onClick={() => onOpenCategory("certificates")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeCategory === "certificates"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.25)]"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
            data-cursor="pointer"
          >
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>Certifications</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-teal-300 border border-white/10">
              32
            </span>
          </button>

          <button
            onClick={() => onOpenCategory("skills")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeCategory === "skills"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.25)]"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
            data-cursor="pointer"
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Skills Matrix</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-blue-300 border border-white/10">
              13+
            </span>
          </button>
        </nav>

        {/* Right Status & Resume Action */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          {/* Availability Status */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-void-dark/80 backdrop-blur-xl border border-white/10 text-[11px] text-slate-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Open for Data Roles</span>
          </div>

          {/* Resume Download CTA */}
          <a
            href={profile.resumeUrl}
            download="Ritik-Kumar-Data-Engineer-Resume.pdf"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 text-xs font-semibold shadow-[0_0_16px_rgba(0,245,255,0.15)] hover:shadow-[0_0_24px_rgba(0,245,255,0.3)] transition-all duration-200"
            data-cursor="pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-void-dark/80 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-void-dark/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2">
          <button
            onClick={() => {
              onOpenCategory("projects");
              setMobileOpen(false);
            }}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Projects Gallery</span>
            </div>
            <span className="font-mono text-xs text-cyan-300">11</span>
          </button>

          <button
            onClick={() => {
              onOpenCategory("certificates");
              setMobileOpen(false);
            }}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
          >
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-teal-400" />
              <span>32 Certifications</span>
            </div>
            <span className="font-mono text-xs text-teal-300">32</span>
          </button>

          <button
            onClick={() => {
              onOpenCategory("skills");
              setMobileOpen(false);
            }}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
          >
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Skills Matrix</span>
            </div>
            <span className="font-mono text-xs text-blue-300">13+</span>
          </button>
        </div>
      )}
    </header>
  );
}
