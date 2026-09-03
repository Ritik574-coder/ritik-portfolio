import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useLenis from "./hooks/useLenis";
import { CustomCursor } from "./components/ui/CustomCursor";
import { DataCanvas } from "./components/hub/DataCanvas";
import { Navbar } from "./components/hub/Navbar";
import { Hero } from "./components/hub/Hero";
import { MicroAbout } from "./components/hub/MicroAbout";
import { CategoryCards } from "./components/hub/CategoryCards";
import { ContactStrip } from "./components/hub/ContactStrip";
import { ProjectsDetailView } from "./components/details/ProjectsDetailView";
import { CertificationsDetailView } from "./components/details/CertificationsDetailView";
import { SkillsDetailView } from "./components/details/SkillsDetailView";

export default function App() {
  useLenis();
  const [activeCategory, setActiveCategory] = useState<"projects" | "certificates" | "skills" | null>(null);

  // Sync with URL Hash for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "projects" || hash === "certificates" || hash === "skills") {
        setActiveCategory(hash);
      } else if (!hash) {
        setActiveCategory(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when category opens or closes
  const handleOpenCategory = (category: "projects" | "certificates" | "skills") => {
    window.location.hash = category;
    setActiveCategory(category);
  };

  const handleCloseCategory = () => {
    window.history.pushState(null, "", window.location.pathname);
    setActiveCategory(null);
  };

  // Keyboard navigation: Escape key closes active detail view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCategory) {
        handleCloseCategory();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory]);

  // Lock body scroll when detail view is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCategory]);

  const scrollToCards = () => {
    const el = document.getElementById("category-cards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-cyber-bg text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* 60fps Dynamic Holographic Pipeline Canvas */}
      <DataCanvas />

      {/* Fixed Frosted Navbar */}
      <Navbar onOpenCategory={handleOpenCategory} activeCategory={activeCategory} />

      {/* Landing Hub (Kept compact: Hero -> MicroAbout -> CategoryCards -> ContactStrip) */}
      <main className="relative z-10 flex flex-col justify-between">
        <Hero onScrollToCards={scrollToCards} />
        <MicroAbout />
        <CategoryCards onSelectCategory={handleOpenCategory} />
        <ContactStrip />
      </main>

      {/* Fullscreen Expandable Detail Views with Framer Motion Layout Morph */}
      <AnimatePresence>
        {activeCategory === "projects" && (
          <ProjectsDetailView onBack={handleCloseCategory} />
        )}
        {activeCategory === "certificates" && (
          <CertificationsDetailView onBack={handleCloseCategory} />
        )}
        {activeCategory === "skills" && (
          <SkillsDetailView onBack={handleCloseCategory} />
        )}
      </AnimatePresence>
    </div>
  );
}
