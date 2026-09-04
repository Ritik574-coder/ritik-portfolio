import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Workflow,
} from "lucide-react";
import { skills } from "../../data/portfolio";

interface SkillsDetailViewProps {
  onBack: () => void;
}

export function SkillsDetailView({ onBack }: SkillsDetailViewProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const groups = [
    "All",
    "Data Engineering",
    "Analytics Engineering",
    "Data Platform",
    "BI & Analytics",
  ];

  const filteredSkills = skills.filter(
    (s) => selectedGroup === "All" || s.group === selectedGroup
  );

  return (
    <motion.div
      layoutId="card-container-skills"
      data-lenis-prevent
      className="fixed inset-0 z-50 overflow-y-auto bg-void-black/95 backdrop-blur-3xl text-slate-100 flex flex-col"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-20 px-4 sm:px-8 py-4 bg-void-dark/85 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-xs font-mono text-blue-300 transition-all"
          data-cursor="pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO HUB</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">SKILLS MATRIX</span>
          <span className="text-blue-400 font-bold">({skills.length}+)</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Evidence-Based Core Competencies</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Data Architecture
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Every skill is backed by tangible repository artifacts: defensive SQL scripts, dbt models, CI/CD workflows, or production dashboards.
          </p>
        </div>

        {/* Medallion Architecture Blueprint */}
        <div className="mb-10 p-6 rounded-2xl bg-void-dark/90 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <h3 className="font-display text-base font-bold text-white">
                Ritik's Production Pipeline Pattern (Medallion Architecture)
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Standardized across warehouses</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400 font-bold">01 / BRONZE LAYER</span>
                <span className="text-[10px] font-mono text-slate-500">Raw Ingestion</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Auditability & History</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Raw CSV and CRM/ERP ingestion into immutable tables with source metadata timestamps and load tracking.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-300 font-bold">02 / SILVER LAYER</span>
                <span className="text-[10px] font-mono text-slate-500">Conformed & Cleaned</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Defensive Cleansing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standardization with TRY_CONVERT, CASE logic, phone/email cleansing, accepted value validation, and deduplication.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-yellow-400 font-bold">03 / GOLD LAYER</span>
                <span className="text-[10px] font-mono text-slate-500">Business Marts</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Star Schema Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fact tables, dimensions, SCD Type 2 history snapshots, and analytical views ready for Power BI, Superset, and Tableau.
              </p>
            </div>
          </div>
        </div>

        {/* Group Filter Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGroup(g)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedGroup === g
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/50 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
              data-cursor="pointer"
            >
              {g}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-void-dark/80 border border-white/10 hover:border-blue-400/40 shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono text-[10px]">
                    {skill.group}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{skill.level}% Depth</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {skill.name}
                </h3>

                {/* Subtle Proficiency Bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden my-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-mono bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider mb-1">Repository Evidence:</span>
                  {skill.evidence}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}
