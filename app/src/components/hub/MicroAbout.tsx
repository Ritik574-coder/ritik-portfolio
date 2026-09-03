import { CheckCircle2 } from "lucide-react";
import { about } from "../../data/portfolio";

export function MicroAbout() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 z-10">
      <div className="p-6 sm:p-8 rounded-2xl bg-void-dark/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Engineering Discipline</span>
          </div>

          <p className="font-display text-lg sm:text-xl text-slate-100 font-medium leading-snug">
            {about.summary}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            {about.journey}
          </p>
        </div>

        {/* Architectural Principles Pills */}
        <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Medallion Layers</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Defensive T-SQL</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>dbt Automated CI/CD</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Star Schema Marts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
