import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Search,
  ExternalLink,
  FileText,
} from "lucide-react";
import { certifications, type Certification } from "../../data/portfolio";
import { PdfLightboxModal } from "./PdfLightboxModal";

interface CertificationsDetailViewProps {
  onBack: () => void;
}

export function CertificationsDetailView({ onBack }: CertificationsDetailViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const categories = [
    "All",
    "dbt",
    "SQL",
    "Python",
    "ETL",
    "Data Engineering",
    "Docker",
    "Spark",
    "Linux",
  ];

  const filteredCerts = useMemo(() => {
    return certifications.filter((c) => {
      const matchesCategory =
        selectedCategory === "All" ||
        c.category.toLowerCase() === selectedCategory.toLowerCase() ||
        c.skills.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()));
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        c.name.toLowerCase().includes(query) ||
        c.issuer.toLowerCase().includes(query) ||
        c.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <motion.div
      layoutId="card-container-certificates"
      className="fixed inset-0 z-50 overflow-y-auto bg-void-black/95 backdrop-blur-3xl text-slate-100 flex flex-col"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-20 px-4 sm:px-8 py-4 bg-void-dark/85 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/40 text-xs font-mono text-teal-300 transition-all"
          data-cursor="pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO HUB</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Award className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline">CREDENTIALS REGISTRY</span>
          <span className="text-teal-400 font-bold">({filteredCerts.length})</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span>Auditable Qualifications</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            32 Verified Certifications
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Complete registry of credentials from DataCamp, Astronomer, and LinkedIn Learning covering dbt Core, SQL Server, Python, Docker, and Apache Airflow. Click any certificate to inspect the verified PDF.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-500/20 text-teal-300 border border-teal-400/50 shadow-[0_0_12px_rgba(0,210,180,0.25)]"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 font-mono"
            />
          </div>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.name}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-2xl bg-void-dark/80 border border-white/10 hover:border-teal-400/40 p-5 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              data-cursor="pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 font-mono text-[10px]">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{cert.issueDate}</span>
                </div>

                <h3 className="font-display text-base font-semibold text-white group-hover:text-teal-300 transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-teal-400 group-hover:text-teal-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <FileText className="w-3.5 h-3.5" />
                  View PDF Certificate
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* PDF Lightbox Modal */}
      <PdfLightboxModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </motion.div>
  );
}
