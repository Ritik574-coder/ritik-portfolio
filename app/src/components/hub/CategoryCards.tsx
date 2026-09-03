import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Award,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { projects, certifications, skills } from "../../data/portfolio";

interface CategoryCardsProps {
  onSelectCategory: (category: "projects" | "certificates" | "skills") => void;
}

export function CategoryCards({ onSelectCategory }: CategoryCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="category-cards" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 z-10">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Interactive Categories</span>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            Click any card to expand full interactive view
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Explore Portfolio Dimensions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ================= CARD 1: PROJECTS ================= */}
        <motion.div
          layoutId="card-container-projects"
          onClick={() => onSelectCategory("projects")}
          onMouseEnter={() => setHoveredCard("projects")}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative cursor-pointer rounded-2xl bg-void-dark/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[360px]"
          data-cursor="card"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Subtle Cyber Gradient Aura */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500"></div>

          <div>
            {/* Header / Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.25)] group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-semibold">
                {projects.length} Systems
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Engineered Projects
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              End-to-end data systems: SQL Server warehouses, dbt Core CI/CD pipelines, and Medallion models.
            </p>

            {/* Hover Peek Collage / Fanning Preview */}
            <div className="mt-5 relative h-36 overflow-hidden rounded-xl bg-black/40 border border-white/10 p-3">
              <div className="space-y-2">
                {projects.slice(0, 3).map((p, idx) => (
                  <div
                    key={p.id}
                    className={`p-2.5 rounded-lg bg-void-dark/90 border border-white/10 shadow transition-all duration-300 ${
                      hoveredCard === "projects"
                        ? idx === 0
                          ? "translate-x-1 border-cyan-400/40"
                          : idx === 1
                          ? "translate-x-2"
                          : "translate-x-3 opacity-60"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-white">
                      <span className="truncate max-w-[170px]">{p.title}</span>
                      <span className="font-mono text-[9px] text-cyan-400">{p.technologies[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
            <span className="flex items-center gap-1.5 font-semibold">
              EXPLORE ALL PROJECTS
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </span>
            <span className="text-slate-400 text-[10px]">Filter & Case Studies</span>
          </div>
        </motion.div>

        {/* ================= CARD 2: CERTIFICATIONS ================= */}
        <motion.div
          layoutId="card-container-certificates"
          onClick={() => onSelectCategory("certificates")}
          onMouseEnter={() => setHoveredCard("certificates")}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative cursor-pointer rounded-2xl bg-void-dark/80 backdrop-blur-xl border border-white/10 hover:border-teal-400/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[360px]"
          data-cursor="card"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-300 shadow-[0_0_15px_rgba(0,210,180,0.25)] group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 font-mono text-xs font-semibold">
                {certifications.length} Credentials
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
              Verified Certifications
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              32 backed certificates from DataCamp, Astronomer, and LinkedIn with full in-browser PDF previews.
            </p>

            {/* Issuing Authority Logo / Card Stack Peek */}
            <div className="mt-5 relative h-36 overflow-hidden rounded-xl bg-black/40 border border-white/10 p-3 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-void-dark/90 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <div>
                    <div className="text-[10px] font-bold text-white">DataCamp</div>
                    <div className="text-[9px] text-teal-300 font-mono">Advanced dbt</div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-void-dark/90 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <div>
                    <div className="text-[10px] font-bold text-white">Astronomer</div>
                    <div className="text-[9px] text-cyan-300 font-mono">Airflow Foundations</div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-void-dark/90 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div>
                    <div className="text-[10px] font-bold text-white">LinkedIn</div>
                    <div className="text-[9px] text-blue-300 font-mono">SQL Engineering</div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-void-dark/90 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div>
                    <div className="text-[10px] font-bold text-white">Docker / Linux</div>
                    <div className="text-[9px] text-amber-300 font-mono">Foundations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-teal-400 group-hover:text-teal-300">
            <span className="flex items-center gap-1.5 font-semibold">
              VERIFY 32 CERTIFICATES
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </span>
            <span className="text-slate-400 text-[10px]">PDF Lightbox</span>
          </div>
        </motion.div>

        {/* ================= CARD 3: SKILLS ================= */}
        <motion.div
          layoutId="card-container-skills"
          onClick={() => onSelectCategory("skills")}
          onMouseEnter={() => setHoveredCard("skills")}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative cursor-pointer rounded-2xl bg-void-dark/80 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[360px]"
          data-cursor="card"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono text-xs font-semibold">
                {skills.length}+ Technologies
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              Skills & Architecture
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              Categorized evidence matrix: Data Engineering, Analytics Engineering, Data Platform, and BI.
            </p>

            {/* Orbiting / Animated Cluster Peek */}
            <div className="mt-5 relative h-36 overflow-hidden rounded-xl bg-black/40 border border-white/10 p-3 flex flex-wrap items-center justify-center gap-1.5">
              {[
                { name: "SQL Server", color: "text-cyan-300 border-cyan-500/30" },
                { name: "dbt Core", color: "text-teal-300 border-teal-500/30" },
                { name: "Docker", color: "text-blue-300 border-blue-500/30" },
                { name: "Python", color: "text-amber-300 border-amber-500/30" },
                { name: "CI/CD", color: "text-emerald-300 border-emerald-500/30" },
                { name: "Medallion", color: "text-cyan-300 border-cyan-500/30" },
                { name: "Power BI", color: "text-yellow-300 border-yellow-500/30" },
                { name: "Tableau", color: "text-sky-300 border-sky-500/30" },
                { name: "PySpark", color: "text-orange-300 border-orange-500/30" },
              ].map((s, idx) => (
                <span
                  key={s.name}
                  className={`px-2.5 py-1 rounded-md bg-void-dark/80 border ${s.color} text-[10px] font-mono font-medium shadow-sm transition-transform duration-300 ${
                    hoveredCard === "skills" ? "scale-105" : ""
                  }`}
                  style={{
                    transitionDelay: `${idx * 25}ms`,
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-blue-400 group-hover:text-blue-300">
            <span className="flex items-center gap-1.5 font-semibold">
              INSPECT TECH MATRIX
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </span>
            <span className="text-slate-400 text-[10px]">Evidence-Based</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
