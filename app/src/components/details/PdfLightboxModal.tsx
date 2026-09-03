import { X, Download, ExternalLink, ShieldCheck, Award } from "lucide-react";
import { type Certification, certificateUrl } from "../../data/portfolio";

interface PdfLightboxModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export function PdfLightboxModal({ cert, onClose }: PdfLightboxModalProps) {
  if (!cert) return null;

  const pdfUrl = certificateUrl(cert.file);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-up">
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl bg-void-dark border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Header Bar */}
        <div className="px-5 py-4 bg-void-dark/95 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-white truncate max-w-md">
                {cert.name}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-teal-400">{cert.issuer}</span>
                <span>•</span>
                <span>{cert.issueDate}</span>
                <span>•</span>
                <span className="text-slate-500">{cert.category}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download={cert.file}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 text-xs font-mono text-teal-300 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Document Container */}
        <div className="flex-1 bg-black/60 relative">
          <iframe
            src={pdfUrl}
            title={cert.name}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Footer Skills Strip */}
        <div className="px-5 py-3 bg-void-dark/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-xs font-mono text-slate-400">Verified Competencies:</span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <span className="text-[10px] font-mono text-slate-500 hidden md:inline">
            Authentic repository PDF asset
          </span>
        </div>
      </div>
    </div>
  );
}
