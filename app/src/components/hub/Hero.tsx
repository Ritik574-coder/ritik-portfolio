import { ArrowDown, Github, Linkedin, Terminal, ShieldCheck, ArrowUpRight } from "lucide-react";
import { profile, projects } from "../../data/portfolio";
import { useGitHubData } from "../../hooks/useGitHubData";

interface HeroProps {
  onScrollToCards: () => void;
}

export function Hero({ onScrollToCards }: HeroProps) {
  const { data: githubData } = useGitHubData();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      {/* Top Tagline & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono tracking-wide">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>DATA SYSTEMS & AI/ML PLATFORMS</span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Snowflake & SQL
          </span>
          <span className="text-slate-600">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            dbt Core CI/CD
          </span>
          <span className="text-slate-600">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            AI & Agentic Pipelines
          </span>
        </div>
      </div>

      {/* Main Center Typography Layout */}
      <div className="my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
            Engineering modern data & <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy">
              AI pipelines at scale.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            I'm <strong className="text-white font-semibold">{profile.name}</strong>, a Data Engineer & AI/ML Specialist building
            Snowflake and SQL Server warehouses, dbt Core CI/CD transformations, Medallion architectures, and intelligent LLM/agentic workflows
            backed by real repository code and telemetry.
          </p>

          {/* Social Proof & Direct Profile Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white text-xs font-mono transition-all duration-200"
              data-cursor="pointer"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub / Ritik574-coder</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-slate-200 hover:text-white text-xs font-mono transition-all duration-200"
              data-cursor="pointer"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Verified 32 Certifications</span>
            </div>
          </div>
        </div>

        {/* Right Hero Portrait with Data Architecture Aura */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Animated Glow Border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-teal-500/20 to-blue-500/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative rounded-2xl overflow-hidden bg-void-dark border border-white/15 p-2 shadow-2xl">
              <img
                src={profile.portrait}
                alt="Ritik Kumar — Data Engineer & AI Specialist"
                width={320}
                height={380}
                className="rounded-xl w-60 sm:w-72 lg:w-64 h-auto object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              {/* Float Overlays */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-void-dark/85 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">SPECIALIZATION</div>
                  <div className="text-xs font-semibold text-white">Data & AI/ML Platforms</div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Strip & Scroll Cue */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6 text-slate-300">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white">
              {githubData.profile.commits || "1,900+"}
            </span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub Commits</span>
          </div>
          <div className="h-7 w-px bg-white/10 hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white">
              {githubData.profile.publicRepos ? `${githubData.profile.publicRepos}+` : "20+"}
            </span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Public Repositories</span>
          </div>
          <div className="h-7 w-px bg-white/10 hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white">
              {projects.length}+
            </span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Engineered Projects</span>
          </div>
          <div className="h-7 w-px bg-white/10 hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white">
              {githubData.profile.followers || "180+"}
            </span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Followers</span>
          </div>
        </div>

        {/* Scroll Cue Button */}
        <button
          onClick={onScrollToCards}
          className="group inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          data-cursor="pointer"
        >
          <span>EXPLORE CATEGORY CARDS</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
