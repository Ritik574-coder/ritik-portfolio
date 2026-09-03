import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUp, Send, X } from "lucide-react";
import { profile } from "../../data/portfolio";

export function ContactStrip() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Fallback or Web3Forms post
    const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) || "demo-key";
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, subject: "Portfolio Quick Inquiry", ...payload }),
      });
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <footer className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 z-10">
      {/* Contact Strip Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-void-dark/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">DIRECT CHANNEL</div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-cyan-300 transition-colors"
              data-cursor="pointer"
              title="Click to copy email address"
            >
              <span>{profile.email}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-[10px] text-teal-400 font-mono">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-slate-400 hover:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Social / Code Links */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all"
            data-cursor="pointer"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-slate-300 hover:text-white transition-all"
            data-cursor="pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-semibold shadow-[0_0_16px_rgba(0,245,255,0.15)] transition-all"
            data-cursor="pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Message</span>
          </button>
        </div>
      </div>

      {/* Minimal 1-Line Clean Footer */}
      <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 font-mono gap-3">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} RITIK KUMAR</span>
          <span className="text-slate-500">/</span>
          <span>DATA SYSTEMS PORTFOLIO</span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
          data-cursor="pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Message Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-void-dark border border-white/15 p-6 shadow-2xl animate-fade-up">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiry</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Get in Touch with Ritik
            </h3>

            {formStatus === "success" ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">Message Transmitted</h4>
                <p className="text-xs text-slate-400">
                  Thank you! I will respond promptly to discuss opportunities.
                </p>
                <button
                  onClick={() => {
                    setFormStatus("idle");
                    setModalOpen(false);
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 font-sans">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Recruiter or Hiring Manager"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Role / Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="We have an opening for a Data Engineer / dbt / SQL Server specialist..."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold text-xs shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all"
                >
                  {formStatus === "submitting" ? "Transmitting..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
